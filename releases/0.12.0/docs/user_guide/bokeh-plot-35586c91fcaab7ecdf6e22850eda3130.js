document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
      }
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("2e465abe-3896-4e3e-89b1-9e306b84133a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2e465abe-3896-4e3e-89b1-9e306b84133a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
          (function outer(modules, cache, entry) {
            if (typeof Bokeh !== "undefined") {
              for (var name in modules) {
                var module = modules[name];
          
                if (typeof(module) === "string") {
                  try {
                    coffee = Bokeh.require("coffee-script")
                  } catch (e) {
                    throw new Error("Compiler requested but failed to import. Make sure bokeh-compiler(-min).js was included.")
                  }
          
                  function compile(code) {
                    var body = coffee.compile(code, {bare: true, shiftLine: true});
                    return new Function("require", "module", "exports", body);
                  }
          
                  modules[name] = [compile(module), {}];
                }
              }
          
              for (var name in modules) {
                Bokeh.require.modules[name] = modules[name];
              }
          
              for (var i = 0; i < entry.length; i++) {
                Bokeh.Models.register_locations(Bokeh.require(entry[i]));
              }
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })({
           "custom/main":[function(require,module,exports){
             module.exports = { Custom: require("custom/custom"),
          DrawTool: require("custom/draw_tool"),
          MyFormatter: require("custom/my_formatter"),
          Surface3d: require("custom/surface3d") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/draw_tool": "\np = require \"core/properties\"\nGestureTool = require \"models/tools/gestures/gesture_tool\"\n\nclass DrawToolView extends GestureTool.View\n\n  # this is executed when the pan/drag event starts\n  _pan_start: (e) ->\n    @model.source.data = {x: [], y: []}\n\n  # this is executed on subsequent mouse/touch moves\n  _pan: (e) ->\n    frame = @plot_model.frame\n    canvas = @plot_view.canvas\n\n    vx = canvas.sx_to_vx(e.bokeh.sx)\n    vy = canvas.sy_to_vy(e.bokeh.sy)\n    if not frame.contains(vx, vy)\n      return null\n\n    x = frame.get(\'x_mappers\').default.map_from_target(vx)\n    y = frame.get(\'y_mappers\').default.map_from_target(vy)\n\n    @model.source.data.x.push(x)\n    @model.source.data.y.push(y)\n    @model.source.trigger(\'change\')\n\n  # this is executed then the pan/drag ends\n  _pan_end: (e) -> return null\n\nclass DrawTool extends GestureTool.Model\n  default_view: DrawToolView\n  type: \"DrawTool\"\n\n  tool_name: \"Drag Span\"\n  icon: \"bk-tool-icon-lasso-select\"\n  event_type: \"pan\"\n  default_order: 12\n\n  @define { source: [ p.Instance ] }\n\nmodule.exports =\n  Model: DrawTool\n  View: DrawToolView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n",
          "custom/surface3d": "\n# This file contains the JavaScript (CoffeeScript) implementation\n# for a Bokeh custom extension. The \"surface3d.py\" contains the\n# python counterpart.\n#\n# This custom model wraps one part of the third-party vis.js library:\n#\n#     http://visjs.org/index.html\n#\n# Making it easy to hook up python data analytics tools (NumPy, SciPy,\n# Pandas, etc.) to web presentations using the Bokeh server.\n\n# These \"require\" lines are similar to python \"import\" statements\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\n# This defines some default options for the Graph3d feature of vis.js\n# See: http://visjs.org/graph3d_examples.html for more details.\nOPTIONS =\n  width:  \'600px\'\n  height: \'600px\'\n  style: \'surface\'\n  showPerspective: true\n  showGrid: true\n  keepAspectRatio: true\n  verticalRatio: 1.0\n  legendLabel: \'stuff\'\n  cameraPosition:\n    horizontal: -0.35\n    vertical: 0.22\n    distance: 1.8\n\n# To create custom model extensions that will render on to the HTML canvas\n# or into the DOM, we must create a View subclass for the model. Currently\n# Bokeh models and views are based on BackBone. More information about\n# using Backbone can be found here:\n#\n#     http://backbonejs.org/\n#\n# In this case we will subclass from the existing BokehJS ``LayoutDOM.View``,\n# corresponding to our\nclass Surface3dView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    url = \"https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js\"\n    $.getScript(url).done(@_init)\n\n  # NOTE: we have to use the \"fat arrow\" => here so that \"this\" is bound correctly\n  _init: () =>\n    # Create a new Graph3s using the vis.js API. This assumes the vis.js has\n    # already been loaded (e.g. in a custom app template). In the future Bokeh\n    # models will be able to specify and load external scripts automatically.\n    #\n    # Backbone Views create <div> elements by default, accessible as @$el. Many\n    # Bokeh views ignore this default <div>, and instead do things like draw\n    # to the HTML canvas. In this case though, we use the <div> to attach a\n    # Graph3d to the DOM.\n    @_graph = new vis.Graph3d(@$el[0], @get_data(), OPTIONS)\n\n    # Set Backbone listener so that when the Bokeh data source has a change\n    # event, we can process the new data\n    @listenTo(@model.data_source, \'change\', () =>\n        @_graph.setData(@get_data())\n    )\n\n  # This is the callback executed when the Bokeh data has an change. Its basic\n  # function is to adapt the Bokeh data source to the vis.js DataSet format.\n  get_data: () ->\n    data = new vis.DataSet()\n    source = @model.data_source\n    for i in [0...source.get_length()]\n      data.add({\n        x:     source.get_column(@model.x)[i]\n        y:     source.get_column(@model.y)[i]\n        z:     source.get_column(@model.z)[i]\n        style: source.get_column(@model.color)[i]\n      })\n    return data\n\n# We must also create a corresponding JavaScript Backbone model sublcass to\n# correspond to the python Bokeh model subclass. In this case, since we want\n# an element that can position itself in the DOM according to a Bokeh layout,\n# we subclass from ``LayoutDOM.model``\nclass Surface3d extends LayoutDOM.Model\n\n  # This is usually boilerplate. In some cases there may not be a view.\n  default_view: Surface3dView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Surface3d\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. ``bokeh.core.properties.String`` will be\n  # ``p.String`` in the JS implementatin. Where the JS type system is not yet\n  # as rich, you can use ``p.Any`` as a \"wildcard\" property type.\n  @define {\n    x:           [ p.String           ]\n    y:           [ p.String           ]\n    z:           [ p.String           ]\n    color:       [ p.String           ]\n    data_source: [ p.Instance         ]\n  }\n\n# This is boilerplate. Every implementation should \"export\" a ``Model``\n# and (when applicable) also a ``View``.\nmodule.exports =\n  Model: Surface3d\n  View: Surface3dView\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"5f7efd1c-11ef-4a4d-9490-02ebbcafab56":{"roots":{"references":[{"attributes":{"callback":null,"mode":"hline","plot":{"id":"ffa2400d-adab-46b5-8c2d-7fd2d04294bf","subtype":"Figure","type":"Plot"},"renderers":[{"id":"8b639bf2-3fbb-4faa-a47f-d89ecf0960e4","type":"GlyphRenderer"}],"tooltips":null},"id":"c3c2cb79-0991-4e5d-93bf-4a5a29533dac","type":"HoverTool"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"64f2e56d-7a10-4f1f-8657-7807af272238","type":"AdaptiveTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"14c9c5ce-8691-425c-85a1-bf148481f300","type":"MonthsTicker"},{"attributes":{"formatter":{"id":"886850d8-966c-4cc4-98af-fa48d8759d99","type":"BasicTickFormatter"},"plot":{"id":"ffa2400d-adab-46b5-8c2d-7fd2d04294bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"f896d679-d08c-42d6-8d12-3f4fa6b0dc9c","type":"BasicTicker"}},"id":"c097dbb1-dd5e-4c2d-a4e9-5472405ff416","type":"LinearAxis"},{"attributes":{"days":[1,8,15,22]},"id":"a9fa7dbb-43a0-4c9a-8249-6f8a63284d98","type":"DaysTicker"},{"attributes":{},"id":"170ee1e7-1d4d-4b0d-844c-8ff61f130d76","type":"ToolEvents"},{"attributes":{"line_color":{"value":"gray"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"3c38621a-a9c8-4de2-bfa8-19aa89c457a1","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c3c2cb79-0991-4e5d-93bf-4a5a29533dac","type":"HoverTool"}]},"id":"472c13f2-b9e9-4503-874c-fec8e587d0aa","type":"Toolbar"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"113fdbef-32d1-40e3-8adc-a5ed7b264f76","type":"DaysTicker"},{"attributes":{"days":[1,15]},"id":"dbbb95fc-b994-4263-81f2-8d3e6f139011","type":"DaysTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1286323380000.0,1286323680000.0,1286323980000.0,1286324280000.0,1286324580000.0,1286324880000.0,1286325180000.0,1286325480000.0,1286325780000.0,1286326080000.0,1286326380000.0,1286326680000.0,1286326980000.0,1286327280000.0,1286327580000.0,1286327880000.0,1286328180000.0,1286328480000.0,1286328780000.0,1286329080000.0,1286329380000.0,1286329680000.0,1286329980000.0,1286330280000.0,1286330580000.0,1286330880000.0,1286331180000.0,1286331480000.0,1286331780000.0,1286332080000.0,1286332380000.0,1286332680000.0,1286332980000.0,1286333280000.0,1286333580000.0,1286333880000.0,1286334180000.0,1286334480000.0,1286334780000.0,1286335080000.0,1286335380000.0,1286335680000.0,1286335980000.0,1286336280000.0,1286336580000.0,1286336880000.0,1286337180000.0,1286337480000.0,1286337780000.0,1286338080000.0,1286338380000.0,1286338680000.0,1286338980000.0,1286339280000.0,1286339580000.0,1286339880000.0,1286340180000.0,1286340480000.0,1286340780000.0,1286341080000.0,1286341380000.0,1286341680000.0,1286341980000.0,1286342280000.0,1286342580000.0,1286342880000.0,1286343180000.0,1286343480000.0,1286343780000.0,1286344080000.0,1286344380000.0,1286344680000.0,1286344980000.0,1286345280000.0,1286345580000.0,1286345880000.0,1286346180000.0,1286346480000.0,1286346780000.0,1286347080000.0,1286347380000.0,1286347680000.0,1286347980000.0,1286348280000.0,1286348580000.0,1286348880000.0,1286349180000.0,1286349480000.0,1286349780000.0,1286350080000.0,1286350380000.0,1286350680000.0,1286350980000.0,1286351280000.0,1286351580000.0,1286351880000.0,1286352180000.0,1286352480000.0,1286352780000.0,1286353080000.0,1286353380000.0,1286353680000.0,1286353980000.0,1286354280000.0,1286354580000.0,1286354880000.0,1286355180000.0,1286355480000.0,1286355780000.0,1286356080000.0,1286356380000.0,1286356680000.0,1286356980000.0,1286357280000.0,1286357580000.0,1286357880000.0,1286358180000.0,1286358480000.0,1286358780000.0,1286359080000.0,1286359380000.0,1286359680000.0,1286359980000.0,1286360280000.0,1286360580000.0,1286360880000.0,1286361180000.0,1286361480000.0,1286361780000.0,1286362080000.0,1286362380000.0,1286362680000.0,1286362980000.0,1286363280000.0,1286363580000.0,1286363880000.0,1286364180000.0,1286364480000.0,1286364780000.0,1286365080000.0,1286365380000.0,1286365680000.0,1286365980000.0,1286366280000.0,1286366580000.0,1286366880000.0,1286367180000.0,1286367480000.0,1286367780000.0,1286368080000.0,1286368380000.0,1286368680000.0,1286368980000.0,1286369280000.0,1286369580000.0,1286369880000.0,1286370180000.0,1286370480000.0,1286370780000.0,1286371080000.0,1286371380000.0,1286371680000.0,1286371980000.0,1286372280000.0,1286372580000.0,1286372880000.0,1286373180000.0,1286373480000.0,1286373780000.0,1286374080000.0,1286374380000.0,1286374680000.0,1286374980000.0,1286375280000.0,1286375580000.0,1286375880000.0,1286376180000.0,1286376480000.0,1286376780000.0,1286377080000.0,1286377380000.0,1286377680000.0,1286377980000.0,1286378280000.0,1286378580000.0,1286378880000.0,1286379180000.0,1286379480000.0,1286379780000.0,1286380080000.0,1286380380000.0,1286380680000.0,1286380980000.0,1286381280000.0,1286381580000.0,1286381880000.0,1286382180000.0,1286382480000.0,1286382780000.0,1286383080000.0,1286383380000.0,1286383680000.0,1286383980000.0,1286384280000.0,1286384580000.0,1286384880000.0,1286385180000.0,1286385480000.0,1286385780000.0,1286386080000.0,1286386380000.0,1286386680000.0,1286386980000.0,1286387280000.0,1286387580000.0,1286387880000.0,1286388180000.0,1286388480000.0,1286388780000.0,1286389080000.0,1286389380000.0,1286389680000.0,1286389980000.0,1286390280000.0,1286390580000.0,1286390880000.0,1286391180000.0,1286391480000.0,1286391780000.0,1286392080000.0,1286392380000.0,1286392680000.0,1286392980000.0,1286393280000.0,1286393580000.0,1286393880000.0,1286394180000.0,1286394480000.0,1286394780000.0,1286395080000.0,1286395380000.0,1286395680000.0,1286395980000.0,1286396280000.0,1286396580000.0,1286396880000.0,1286397180000.0,1286397480000.0,1286397780000.0,1286398080000.0,1286398380000.0,1286398680000.0,1286398980000.0,1286399280000.0,1286399580000.0,1286399880000.0,1286400180000.0,1286400480000.0,1286400780000.0,1286401080000.0,1286401380000.0,1286401680000.0,1286401980000.0,1286402280000.0,1286402580000.0,1286402880000.0,1286403180000.0,1286403480000.0,1286403780000.0,1286404080000.0,1286404380000.0,1286404680000.0,1286404980000.0,1286405280000.0,1286405580000.0,1286405880000.0,1286406180000.0,1286406480000.0,1286406780000.0,1286407080000.0,1286407380000.0,1286407680000.0,1286407980000.0,1286408280000.0,1286408580000.0,1286408880000.0,1286409180000.0,1286409480000.0],"y":[143,147,150,152,152,152,154,155,142,140,138,134,131,130,128,127,126,126,126,126,127,129,131,132,134,136,136,136,136,135,134,132,130,130,130,129,128,127,125,124,123,123,122,121,120,118,115,112,111,111,110,110,109,108,107,107,107,108,107,105,105,105,105,104,103,102,99,97,96,94,94,93,93,92,91,92,94,95,96,97,99,102,104,112,112,112,111,110,107,104,105,105,103,99,96,94,95,102,114,128,144,160,173,185,196,205,209,214,219,226,234,241,248,255,260,265,268,270,272,271,271,268,265,261,256,253,250,246,244,241,237,233,229,225,222,204,200,197,193,190,186,182,179,175,171,168,164,158,154,151,148,145,141,133,139,152,173,196,217,233,244,249,250,253,256,260,263,265,265,264,260,254,246,234,217,200,188,181,175,169,164,159,154,147,138,132,129,127,123,117,111,106,104,103,100,94,88,83,78,75,73,71,69,68,67,67,68,70,71,71,70,69,68,67,67,67,66,67,69,71,74,76,78,80,80,80,80,80,80,82,84,87,90,92,87,87,86,86,86,86,87,87,87,85,83,82,83,87,95,107,118,130,141,149,172,179,187,201,214,221,225,230,232,230,223,216,208,199,191,185,181,177,176,177,176,173,171,169,163,154,152,153,154,154,153,151,150,150]}},"id":"e4429da2-88e5-4a34-9ed6-32ef6b2eacbc","type":"ColumnDataSource"},{"attributes":{"num_minor_ticks":5},"id":"0fa1f270-cf48-45fa-9fb8-67868512b404","type":"DatetimeTicker"},{"attributes":{"callback":null},"id":"e2bbf9ee-dd2e-4d11-a792-4aec204ba489","type":"DataRange1d"},{"attributes":{"plot":{"id":"ffa2400d-adab-46b5-8c2d-7fd2d04294bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"0fa1f270-cf48-45fa-9fb8-67868512b404","type":"DatetimeTicker"}},"id":"c31ffaf2-b7b3-41ed-bc61-2d1fbb2e0f69","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1286323380000.0,1286323680000.0,1286323980000.0,1286324280000.0,1286324580000.0,1286324880000.0,1286325180000.0,1286325480000.0,1286325780000.0,1286326080000.0,1286326380000.0,1286326680000.0,1286326980000.0,1286327280000.0,1286327580000.0,1286327880000.0,1286328180000.0,1286328480000.0,1286328780000.0,1286329080000.0,1286329380000.0,1286329680000.0,1286329980000.0,1286330280000.0,1286330580000.0,1286330880000.0,1286331180000.0,1286331480000.0,1286331780000.0,1286332080000.0,1286332380000.0,1286332680000.0,1286332980000.0,1286333280000.0,1286333580000.0,1286333880000.0,1286334180000.0,1286334480000.0,1286334780000.0,1286335080000.0,1286335380000.0,1286335680000.0,1286335980000.0,1286336280000.0,1286336580000.0,1286336880000.0,1286337180000.0,1286337480000.0,1286337780000.0,1286338080000.0,1286338380000.0,1286338680000.0,1286338980000.0,1286339280000.0,1286339580000.0,1286339880000.0,1286340180000.0,1286340480000.0,1286340780000.0,1286341080000.0,1286341380000.0,1286341680000.0,1286341980000.0,1286342280000.0,1286342580000.0,1286342880000.0,1286343180000.0,1286343480000.0,1286343780000.0,1286344080000.0,1286344380000.0,1286344680000.0,1286344980000.0,1286345280000.0,1286345580000.0,1286345880000.0,1286346180000.0,1286346480000.0,1286346780000.0,1286347080000.0,1286347380000.0,1286347680000.0,1286347980000.0,1286348280000.0,1286348580000.0,1286348880000.0,1286349180000.0,1286349480000.0,1286349780000.0,1286350080000.0,1286350380000.0,1286350680000.0,1286350980000.0,1286351280000.0,1286351580000.0,1286351880000.0,1286352180000.0,1286352480000.0,1286352780000.0,1286353080000.0,1286353380000.0,1286353680000.0,1286353980000.0,1286354280000.0,1286354580000.0,1286354880000.0,1286355180000.0,1286355480000.0,1286355780000.0,1286356080000.0,1286356380000.0,1286356680000.0,1286356980000.0,1286357280000.0,1286357580000.0,1286357880000.0,1286358180000.0,1286358480000.0,1286358780000.0,1286359080000.0,1286359380000.0,1286359680000.0,1286359980000.0,1286360280000.0,1286360580000.0,1286360880000.0,1286361180000.0,1286361480000.0,1286361780000.0,1286362080000.0,1286362380000.0,1286362680000.0,1286362980000.0,1286363280000.0,1286363580000.0,1286363880000.0,1286364180000.0,1286364480000.0,1286364780000.0,1286365080000.0,1286365380000.0,1286365680000.0,1286365980000.0,1286366280000.0,1286366580000.0,1286366880000.0,1286367180000.0,1286367480000.0,1286367780000.0,1286368080000.0,1286368380000.0,1286368680000.0,1286368980000.0,1286369280000.0,1286369580000.0,1286369880000.0,1286370180000.0,1286370480000.0,1286370780000.0,1286371080000.0,1286371380000.0,1286371680000.0,1286371980000.0,1286372280000.0,1286372580000.0,1286372880000.0,1286373180000.0,1286373480000.0,1286373780000.0,1286374080000.0,1286374380000.0,1286374680000.0,1286374980000.0,1286375280000.0,1286375580000.0,1286375880000.0,1286376180000.0,1286376480000.0,1286376780000.0,1286377080000.0,1286377380000.0,1286377680000.0,1286377980000.0,1286378280000.0,1286378580000.0,1286378880000.0,1286379180000.0,1286379480000.0,1286379780000.0,1286380080000.0,1286380380000.0,1286380680000.0,1286380980000.0,1286381280000.0,1286381580000.0,1286381880000.0,1286382180000.0,1286382480000.0,1286382780000.0,1286383080000.0,1286383380000.0,1286383680000.0,1286383980000.0,1286384280000.0,1286384580000.0,1286384880000.0,1286385180000.0,1286385480000.0,1286385780000.0,1286386080000.0,1286386380000.0,1286386680000.0,1286386980000.0,1286387280000.0,1286387580000.0,1286387880000.0,1286388180000.0,1286388480000.0,1286388780000.0,1286389080000.0,1286389380000.0,1286389680000.0,1286389980000.0,1286390280000.0,1286390580000.0,1286390880000.0,1286391180000.0,1286391480000.0,1286391780000.0,1286392080000.0,1286392380000.0,1286392680000.0,1286392980000.0,1286393280000.0,1286393580000.0,1286393880000.0,1286394180000.0,1286394480000.0,1286394780000.0,1286395080000.0,1286395380000.0,1286395680000.0,1286395980000.0,1286396280000.0,1286396580000.0,1286396880000.0,1286397180000.0,1286397480000.0,1286397780000.0,1286398080000.0,1286398380000.0,1286398680000.0,1286398980000.0,1286399280000.0,1286399580000.0,1286399880000.0,1286400180000.0,1286400480000.0,1286400780000.0,1286401080000.0,1286401380000.0,1286401680000.0,1286401980000.0,1286402280000.0,1286402580000.0,1286402880000.0,1286403180000.0,1286403480000.0,1286403780000.0,1286404080000.0,1286404380000.0,1286404680000.0,1286404980000.0,1286405280000.0,1286405580000.0,1286405880000.0,1286406180000.0,1286406480000.0,1286406780000.0,1286407080000.0,1286407380000.0,1286407680000.0,1286407980000.0,1286408280000.0,1286408580000.0,1286408880000.0,1286409180000.0,1286409480000.0],"y":[143,147,150,152,152,152,154,155,142,140,138,134,131,130,128,127,126,126,126,126,127,129,131,132,134,136,136,136,136,135,134,132,130,130,130,129,128,127,125,124,123,123,122,121,120,118,115,112,111,111,110,110,109,108,107,107,107,108,107,105,105,105,105,104,103,102,99,97,96,94,94,93,93,92,91,92,94,95,96,97,99,102,104,112,112,112,111,110,107,104,105,105,103,99,96,94,95,102,114,128,144,160,173,185,196,205,209,214,219,226,234,241,248,255,260,265,268,270,272,271,271,268,265,261,256,253,250,246,244,241,237,233,229,225,222,204,200,197,193,190,186,182,179,175,171,168,164,158,154,151,148,145,141,133,139,152,173,196,217,233,244,249,250,253,256,260,263,265,265,264,260,254,246,234,217,200,188,181,175,169,164,159,154,147,138,132,129,127,123,117,111,106,104,103,100,94,88,83,78,75,73,71,69,68,67,67,68,70,71,71,70,69,68,67,67,67,66,67,69,71,74,76,78,80,80,80,80,80,80,82,84,87,90,92,87,87,86,86,86,86,87,87,87,85,83,82,83,87,95,107,118,130,141,149,172,179,187,201,214,221,225,230,232,230,223,216,208,199,191,185,181,177,176,177,176,173,171,169,163,154,152,153,154,154,153,151,150,150]}},"id":"31f7213e-93c2-486b-a80d-e0aafef84bf1","type":"ColumnDataSource"},{"attributes":{},"id":"f896d679-d08c-42d6-8d12-3f4fa6b0dc9c","type":"BasicTicker"},{"attributes":{},"id":"eccde4c5-210e-4568-925a-ccab3b2ef45e","type":"DatetimeTickFormatter"},{"attributes":{"data_source":{"id":"31f7213e-93c2-486b-a80d-e0aafef84bf1","type":"ColumnDataSource"},"glyph":{"id":"3c38621a-a9c8-4de2-bfa8-19aa89c457a1","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"d05b5c77-13e4-48f8-a9f8-1dc2551ddc19","type":"Line"},"selection_glyph":null},"id":"26f3a446-7711-47fd-a586-062b587abf3f","type":"GlyphRenderer"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"09bd5d1d-149e-4286-a7e9-350fbdc7c897","type":"DaysTicker"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"294537e6-9d13-4a3d-b1a9-b827427c2b22","type":"Title"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"1f1ba59f-71b4-4cd0-bb02-22677b3d06c6","type":"AdaptiveTicker"},{"attributes":{"months":[0,6]},"id":"1a64f26e-eabb-4595-b5bf-0326be955f63","type":"MonthsTicker"},{"attributes":{"formatter":{"id":"eccde4c5-210e-4568-925a-ccab3b2ef45e","type":"DatetimeTickFormatter"},"plot":{"id":"ffa2400d-adab-46b5-8c2d-7fd2d04294bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"0fa1f270-cf48-45fa-9fb8-67868512b404","type":"DatetimeTicker"}},"id":"6b142c30-cdfd-4587-b2d0-25f172f2c4b5","type":"DatetimeAxis"},{"attributes":{"fill_alpha":{"value":0.05},"fill_color":{"value":"grey"},"line_color":{"value":null},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c2cdc00-728c-49b7-b377-7375a3773db0","type":"Circle"},{"attributes":{"callback":null},"id":"76da6a42-c8f9-4358-b320-9e67d9ddaddf","type":"DataRange1d"},{"attributes":{"data_source":{"id":"e4429da2-88e5-4a34-9ed6-32ef6b2eacbc","type":"ColumnDataSource"},"glyph":{"id":"7c2cdc00-728c-49b7-b377-7375a3773db0","type":"Circle"},"hover_glyph":{"id":"32227823-e674-439d-a615-6fbcf91064ac","type":"Circle"},"nonselection_glyph":{"id":"f535fc2c-663f-44cf-81c0-77cb139d4a11","type":"Circle"},"selection_glyph":null},"id":"8b639bf2-3fbb-4faa-a47f-d89ecf0960e4","type":"GlyphRenderer"},{"attributes":{"months":[0,4,8]},"id":"fcb67839-a1cc-46b8-925e-bec6f8e00904","type":"MonthsTicker"},{"attributes":{},"id":"78d66330-e6da-4fa1-8798-94686ae5a33a","type":"YearsTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"d05b5c77-13e4-48f8-a9f8-1dc2551ddc19","type":"Line"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"b3a98c59-d84f-4392-af4f-59cfc13b085b","type":"MonthsTicker"},{"attributes":{"dimension":1,"plot":{"id":"ffa2400d-adab-46b5-8c2d-7fd2d04294bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"f896d679-d08c-42d6-8d12-3f4fa6b0dc9c","type":"BasicTicker"}},"id":"f28725ad-1f31-48f2-883b-edc16e8b5f43","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.3},"line_color":{"value":"white"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32227823-e674-439d-a615-6fbcf91064ac","type":"Circle"},{"attributes":{"below":[{"id":"6b142c30-cdfd-4587-b2d0-25f172f2c4b5","type":"DatetimeAxis"}],"left":[{"id":"c097dbb1-dd5e-4c2d-a4e9-5472405ff416","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"6b142c30-cdfd-4587-b2d0-25f172f2c4b5","type":"DatetimeAxis"},{"id":"c31ffaf2-b7b3-41ed-bc61-2d1fbb2e0f69","type":"Grid"},{"id":"c097dbb1-dd5e-4c2d-a4e9-5472405ff416","type":"LinearAxis"},{"id":"f28725ad-1f31-48f2-883b-edc16e8b5f43","type":"Grid"},{"id":"26f3a446-7711-47fd-a586-062b587abf3f","type":"GlyphRenderer"},{"id":"8b639bf2-3fbb-4faa-a47f-d89ecf0960e4","type":"GlyphRenderer"}],"title":{"id":"294537e6-9d13-4a3d-b1a9-b827427c2b22","type":"Title"},"tool_events":{"id":"170ee1e7-1d4d-4b0d-844c-8ff61f130d76","type":"ToolEvents"},"toolbar":{"id":"472c13f2-b9e9-4503-874c-fec8e587d0aa","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"76da6a42-c8f9-4358-b320-9e67d9ddaddf","type":"DataRange1d"},"y_range":{"id":"e2bbf9ee-dd2e-4d11-a792-4aec204ba489","type":"DataRange1d"}},"id":"ffa2400d-adab-46b5-8c2d-7fd2d04294bf","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"886850d8-966c-4cc4-98af-fa48d8759d99","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f535fc2c-663f-44cf-81c0-77cb139d4a11","type":"Circle"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"dc7497a2-fe3a-4cf6-aa67-151a32354022","type":"AdaptiveTicker"}],"root_ids":["ffa2400d-adab-46b5-8c2d-7fd2d04294bf"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"5f7efd1c-11ef-4a4d-9490-02ebbcafab56","elementid":"2e465abe-3896-4e3e-89b1-9e306b84133a","modelid":"ffa2400d-adab-46b5-8c2d-7fd2d04294bf"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
        }
      ];
    
      function run_inline_js() {
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});