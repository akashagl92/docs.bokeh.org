document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
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
      };var element = document.getElementById("613757e2-63c9-4a95-bbd3-9e6aa82a9247");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '613757e2-63c9-4a95-bbd3-9e6aa82a9247' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
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
              var docs_json = {"8cc62fb6-e03f-4998-9511-656cd0b7432f":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b9ce2aab-2ccc-4671-bf02-ab110de6397e","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"a0d3cc83-cd93-4870-a9d7-3dfeb90af949","type":"BasicTickFormatter"},"plot":{"id":"d046f3af-12ef-47f8-9f45-d18e0340ed82","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb58c726-dfe4-4ad5-9e9e-24c354939125","type":"BasicTicker"}},"id":"7201bd46-677a-4901-92b2-0855119e56c7","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y1","y0","x"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"e68b52f6-0055-4f15-a7bf-ea367a11a6ea","type":"ColumnDataSource"},{"attributes":{},"id":"151f6da0-e3af-472c-bcf2-be9bc0b781b0","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"b4a9d831-1dbc-4b74-97ee-50e2bf140ef4","type":"Circle"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"2dce65ee-a104-43d8-aab2-e501a3efbce3","type":"BoxSelectTool"},{"id":"3855c970-2bbb-4aa7-a53f-382b4c2f497c","type":"LassoSelectTool"},{"id":"7f8873ca-71d4-4ed2-8474-cec8006a5781","type":"HelpTool"},{"id":"6793f7fe-7848-48ea-8279-2571ac58513e","type":"BoxSelectTool"},{"id":"51384a51-8773-437b-a39d-059c169f1b9a","type":"LassoSelectTool"},{"id":"5813a872-3a32-4be2-ad14-b04272c13af3","type":"HelpTool"}]},"id":"f56ffd82-3d24-4b5f-b0c9-6c1343301dc8","type":"ToolbarBox"},{"attributes":{"plot":{"id":"92377fe3-0962-4b42-9cf1-79acbcef9a2a","subtype":"Figure","type":"Plot"}},"id":"7f8873ca-71d4-4ed2-8474-cec8006a5781","type":"HelpTool"},{"attributes":{"data_source":{"id":"e68b52f6-0055-4f15-a7bf-ea367a11a6ea","type":"ColumnDataSource"},"glyph":{"id":"d29bd092-8830-481c-8277-85ad8ed6f677","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"78817e49-8254-4030-b68a-98b64662367a","type":"Circle"},"selection_glyph":null},"id":"f4fc2ed5-7c0d-4156-942f-0a1e2344a09d","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"d29bd092-8830-481c-8277-85ad8ed6f677","type":"Circle"},{"attributes":{"callback":null},"id":"74576be1-6023-4085-80b3-1a9a227c6686","type":"DataRange1d"},{"attributes":{"plot":{"id":"d046f3af-12ef-47f8-9f45-d18e0340ed82","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c5d617b-5889-4723-b1d4-26cff6c61e9c","type":"BasicTicker"}},"id":"d49cde8f-2fe7-4456-8243-8e444fa9c506","type":"Grid"},{"attributes":{"plot":{"id":"d046f3af-12ef-47f8-9f45-d18e0340ed82","subtype":"Figure","type":"Plot"}},"id":"5813a872-3a32-4be2-ad14-b04272c13af3","type":"HelpTool"},{"attributes":{},"id":"a0d3cc83-cd93-4870-a9d7-3dfeb90af949","type":"BasicTickFormatter"},{"attributes":{},"id":"0c5d617b-5889-4723-b1d4-26cff6c61e9c","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"d046f3af-12ef-47f8-9f45-d18e0340ed82","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb58c726-dfe4-4ad5-9e9e-24c354939125","type":"BasicTicker"}},"id":"c02e7ecf-acb4-4abc-a0b7-504cfc0381bd","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"f25ad8b7-876f-44cb-8b6a-2edaeca39fc5","type":"Circle"},{"attributes":{},"id":"3ed19fa9-be89-4d47-a977-06132021dc25","type":"ToolEvents"},{"attributes":{"callback":null,"overlay":{"id":"4204f7d2-12cd-40c3-b14a-185f620a78fe","type":"PolyAnnotation"},"plot":{"id":"92377fe3-0962-4b42-9cf1-79acbcef9a2a","subtype":"Figure","type":"Plot"}},"id":"3855c970-2bbb-4aa7-a53f-382b4c2f497c","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"dc9ed713-a11f-45fc-9f7d-447fea4e9d19","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"aae50fca-b30e-4846-a928-021918ed946b","type":"BoxAnnotation"},"plot":{"id":"92377fe3-0962-4b42-9cf1-79acbcef9a2a","subtype":"Figure","type":"Plot"},"renderers":[{"id":"803e0e9c-f5a7-46c9-b287-a9b2aca7e638","type":"GlyphRenderer"}]},"id":"2dce65ee-a104-43d8-aab2-e501a3efbce3","type":"BoxSelectTool"},{"attributes":{"plot":null,"text":null},"id":"2ec84768-2f5a-47b4-a4f9-15c7b38f038f","type":"Title"},{"attributes":{"children":[{"id":"2062ebe7-7471-48c5-89f5-ea3a4c9e3855","type":"Row"}]},"id":"faf23e0f-7330-4b4c-8512-5a1c764e37ce","type":"Column"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"4204f7d2-12cd-40c3-b14a-185f620a78fe","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"1cd4f065-9f61-4eb9-9504-e22e9efd32cf","type":"DataRange1d"},{"attributes":{},"id":"eb58c726-dfe4-4ad5-9e9e-24c354939125","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6793f7fe-7848-48ea-8279-2571ac58513e","type":"BoxSelectTool"},{"id":"51384a51-8773-437b-a39d-059c169f1b9a","type":"LassoSelectTool"},{"id":"5813a872-3a32-4be2-ad14-b04272c13af3","type":"HelpTool"}]},"id":"533fda14-26f3-4eb3-b657-874cb12819ef","type":"Toolbar"},{"attributes":{},"id":"91818e5a-7094-464f-8836-f431d5dd8964","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"92377fe3-0962-4b42-9cf1-79acbcef9a2a","subtype":"Figure","type":"Plot"},"ticker":{"id":"91818e5a-7094-464f-8836-f431d5dd8964","type":"BasicTicker"}},"id":"d1c12b34-0dc6-4f81-af7c-4be8209accc8","type":"Grid"},{"attributes":{"children":[{"id":"f56ffd82-3d24-4b5f-b0c9-6c1343301dc8","type":"ToolbarBox"},{"id":"faf23e0f-7330-4b4c-8512-5a1c764e37ce","type":"Column"}]},"id":"3f224113-e3fd-4a85-8fec-edbe6dd2bcd5","type":"Column"},{"attributes":{"below":[{"id":"d664e7eb-e36d-40e9-9420-a899da42898e","type":"LinearAxis"}],"left":[{"id":"3eea8513-a95f-458b-bb81-1840de2f827c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d664e7eb-e36d-40e9-9420-a899da42898e","type":"LinearAxis"},{"id":"657091ac-f525-4def-b333-6122b8c2f05b","type":"Grid"},{"id":"3eea8513-a95f-458b-bb81-1840de2f827c","type":"LinearAxis"},{"id":"d1c12b34-0dc6-4f81-af7c-4be8209accc8","type":"Grid"},{"id":"aae50fca-b30e-4846-a928-021918ed946b","type":"BoxAnnotation"},{"id":"4204f7d2-12cd-40c3-b14a-185f620a78fe","type":"PolyAnnotation"},{"id":"803e0e9c-f5a7-46c9-b287-a9b2aca7e638","type":"GlyphRenderer"}],"title":{"id":"f170ac47-3207-41e4-b682-0db020e06b92","type":"Title"},"tool_events":{"id":"3ed19fa9-be89-4d47-a977-06132021dc25","type":"ToolEvents"},"toolbar":{"id":"1e4d3615-deee-4a72-a250-b13ec471b51a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"74576be1-6023-4085-80b3-1a9a227c6686","type":"DataRange1d"},"y_range":{"id":"1cd4f065-9f61-4eb9-9504-e22e9efd32cf","type":"DataRange1d"}},"id":"92377fe3-0962-4b42-9cf1-79acbcef9a2a","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"2e774782-68e8-4b1f-950f-d4c606971773","type":"BasicTickFormatter"},"plot":{"id":"d046f3af-12ef-47f8-9f45-d18e0340ed82","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c5d617b-5889-4723-b1d4-26cff6c61e9c","type":"BasicTicker"}},"id":"113b5a87-9f8a-4a58-9210-ff1d68df4adf","type":"LinearAxis"},{"attributes":{"below":[{"id":"113b5a87-9f8a-4a58-9210-ff1d68df4adf","type":"LinearAxis"}],"left":[{"id":"7201bd46-677a-4901-92b2-0855119e56c7","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"113b5a87-9f8a-4a58-9210-ff1d68df4adf","type":"LinearAxis"},{"id":"d49cde8f-2fe7-4456-8243-8e444fa9c506","type":"Grid"},{"id":"7201bd46-677a-4901-92b2-0855119e56c7","type":"LinearAxis"},{"id":"c02e7ecf-acb4-4abc-a0b7-504cfc0381bd","type":"Grid"},{"id":"b9ce2aab-2ccc-4671-bf02-ab110de6397e","type":"BoxAnnotation"},{"id":"3f4cc793-ead8-412a-a5a8-159e91faa439","type":"PolyAnnotation"},{"id":"f4fc2ed5-7c0d-4156-942f-0a1e2344a09d","type":"GlyphRenderer"}],"title":{"id":"2ec84768-2f5a-47b4-a4f9-15c7b38f038f","type":"Title"},"tool_events":{"id":"5aaec978-eaa6-4e66-a674-e526b3d85d68","type":"ToolEvents"},"toolbar":{"id":"533fda14-26f3-4eb3-b657-874cb12819ef","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dc9ed713-a11f-45fc-9f7d-447fea4e9d19","type":"DataRange1d"},"y_range":{"id":"fac8b1f9-80f5-4c69-a695-5589f714075a","type":"DataRange1d"}},"id":"d046f3af-12ef-47f8-9f45-d18e0340ed82","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7f49d022-f35f-4539-b821-7675ce90ca05","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"f170ac47-3207-41e4-b682-0db020e06b92","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2dce65ee-a104-43d8-aab2-e501a3efbce3","type":"BoxSelectTool"},{"id":"3855c970-2bbb-4aa7-a53f-382b4c2f497c","type":"LassoSelectTool"},{"id":"7f8873ca-71d4-4ed2-8474-cec8006a5781","type":"HelpTool"}]},"id":"1e4d3615-deee-4a72-a250-b13ec471b51a","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"3f4cc793-ead8-412a-a5a8-159e91faa439","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"fac8b1f9-80f5-4c69-a695-5589f714075a","type":"DataRange1d"},{"attributes":{"formatter":{"id":"151f6da0-e3af-472c-bcf2-be9bc0b781b0","type":"BasicTickFormatter"},"plot":{"id":"92377fe3-0962-4b42-9cf1-79acbcef9a2a","subtype":"Figure","type":"Plot"},"ticker":{"id":"91818e5a-7094-464f-8836-f431d5dd8964","type":"BasicTicker"}},"id":"3eea8513-a95f-458b-bb81-1840de2f827c","type":"LinearAxis"},{"attributes":{},"id":"2e774782-68e8-4b1f-950f-d4c606971773","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"7f49d022-f35f-4539-b821-7675ce90ca05","type":"BasicTickFormatter"},"plot":{"id":"92377fe3-0962-4b42-9cf1-79acbcef9a2a","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb89c6b6-45e7-4d21-ba97-f5b9210e8ccf","type":"BasicTicker"}},"id":"d664e7eb-e36d-40e9-9420-a899da42898e","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"3f4cc793-ead8-412a-a5a8-159e91faa439","type":"PolyAnnotation"},"plot":{"id":"d046f3af-12ef-47f8-9f45-d18e0340ed82","subtype":"Figure","type":"Plot"}},"id":"51384a51-8773-437b-a39d-059c169f1b9a","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"92377fe3-0962-4b42-9cf1-79acbcef9a2a","subtype":"Figure","type":"Plot"},{"id":"d046f3af-12ef-47f8-9f45-d18e0340ed82","subtype":"Figure","type":"Plot"}]},"id":"2062ebe7-7471-48c5-89f5-ea3a4c9e3855","type":"Row"},{"attributes":{"data_source":{"id":"e68b52f6-0055-4f15-a7bf-ea367a11a6ea","type":"ColumnDataSource"},"glyph":{"id":"b4a9d831-1dbc-4b74-97ee-50e2bf140ef4","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"f25ad8b7-876f-44cb-8b6a-2edaeca39fc5","type":"Circle"},"selection_glyph":null},"id":"803e0e9c-f5a7-46c9-b287-a9b2aca7e638","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"78817e49-8254-4030-b68a-98b64662367a","type":"Circle"},{"attributes":{"plot":{"id":"92377fe3-0962-4b42-9cf1-79acbcef9a2a","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb89c6b6-45e7-4d21-ba97-f5b9210e8ccf","type":"BasicTicker"}},"id":"657091ac-f525-4def-b333-6122b8c2f05b","type":"Grid"},{"attributes":{},"id":"5aaec978-eaa6-4e66-a674-e526b3d85d68","type":"ToolEvents"},{"attributes":{},"id":"bb89c6b6-45e7-4d21-ba97-f5b9210e8ccf","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"b9ce2aab-2ccc-4671-bf02-ab110de6397e","type":"BoxAnnotation"},"plot":{"id":"d046f3af-12ef-47f8-9f45-d18e0340ed82","subtype":"Figure","type":"Plot"},"renderers":[{"id":"f4fc2ed5-7c0d-4156-942f-0a1e2344a09d","type":"GlyphRenderer"}]},"id":"6793f7fe-7848-48ea-8279-2571ac58513e","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"aae50fca-b30e-4846-a928-021918ed946b","type":"BoxAnnotation"}],"root_ids":["3f224113-e3fd-4a85-8fec-edbe6dd2bcd5"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"8cc62fb6-e03f-4998-9511-656cd0b7432f","elementid":"613757e2-63c9-4a95-bbd3-9e6aa82a9247","modelid":"3f224113-e3fd-4a85-8fec-edbe6dd2bcd5"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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