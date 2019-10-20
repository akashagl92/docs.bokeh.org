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
      };var element = document.getElementById("e7f9a410-d7ee-448e-8a81-eb44a0d77ec2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e7f9a410-d7ee-448e-8a81-eb44a0d77ec2' but no matching script tag was found. ")
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
              var docs_json = {"28427e1a-f984-4e39-9183-29440fdd40e3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d6b60067-d951-442c-b3d1-e6866dd44ba9","type":"PanTool"},{"id":"f74ebfd7-b28c-4b0d-a0f9-989dc7b14e0f","type":"BoxZoomTool"},{"id":"8c14dc74-3a37-4381-960a-2619d4c7f88c","type":"ResetTool"},{"id":"feb7f48e-7e9b-4031-bc3d-2b7b04099d55","type":"SaveTool"}]},"id":"217c00be-a3a7-4fe6-bae1-85093bb145f5","type":"Toolbar"},{"attributes":{"plot":{"id":"6132b1ca-7faf-48d1-b8d9-a6b10ddf465c","subtype":"Figure","type":"Plot"}},"id":"feb7f48e-7e9b-4031-bc3d-2b7b04099d55","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"9afa83bb-09ec-4011-95f6-476cdcc9f47a","type":"ColumnDataSource"},{"attributes":{},"id":"ac77d83a-1297-4405-b958-baa952db3e40","type":"ToolEvents"},{"attributes":{"plot":{"id":"6132b1ca-7faf-48d1-b8d9-a6b10ddf465c","subtype":"Figure","type":"Plot"}},"id":"8c14dc74-3a37-4381-960a-2619d4c7f88c","type":"ResetTool"},{"attributes":{"legends":[["y=x",[{"id":"433b7b1e-363c-44c6-bcac-11033d848625","type":"GlyphRenderer"},{"id":"90b5bbb7-4b68-49f2-90dd-3191831e7d20","type":"GlyphRenderer"}]],["y=x^2",[{"id":"67cf3ce4-9995-47f2-95fc-259d32fcad21","type":"GlyphRenderer"}]],["y=10^x",[{"id":"5b633ad0-9951-4d13-8dc2-48a867019c29","type":"GlyphRenderer"},{"id":"e93725fd-8be8-4d1d-a2a6-30d26b820c93","type":"GlyphRenderer"}]],["y=10^x^2",[{"id":"c2ab5d24-67f2-4d63-be60-ca79b477d6da","type":"GlyphRenderer"}]]],"plot":{"id":"6132b1ca-7faf-48d1-b8d9-a6b10ddf465c","subtype":"Figure","type":"Plot"}},"id":"0c9f5b31-4b4d-4b1e-873b-fa73e0707690","type":"Legend"},{"attributes":{"overlay":{"id":"49e5c39f-25f0-46e3-bd62-0424903e6809","type":"BoxAnnotation"},"plot":{"id":"6132b1ca-7faf-48d1-b8d9-a6b10ddf465c","subtype":"Figure","type":"Plot"}},"id":"f74ebfd7-b28c-4b0d-a0f9-989dc7b14e0f","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"660ce209-cb00-488c-bceb-10676eb03836","type":"ColumnDataSource"},"glyph":{"id":"5f58769f-bdb0-4c5d-bd78-b747d5699653","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"4cb01b3d-780d-4267-8adb-d517151fa321","type":"Line"},"selection_glyph":null},"id":"67cf3ce4-9995-47f2-95fc-259d32fcad21","type":"GlyphRenderer"},{"attributes":{"ticker":null},"id":"c132eab6-abf2-4c2e-a830-b214d2ec9e2b","type":"LogTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"660ce209-cb00-488c-bceb-10676eb03836","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6132b1ca-7faf-48d1-b8d9-a6b10ddf465c","subtype":"Figure","type":"Plot"}},"id":"d6b60067-d951-442c-b3d1-e6866dd44ba9","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ddbd3e6a-e81d-4b93-a0ea-e4c147ab21ca","type":"Line"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"1001a7a1-8e2c-46ea-9c44-0d5d911fc4ec","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"2680adb7-6b9e-42e4-90f8-0ca577a16b7d","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10796d06-52f2-4ae3-b7e6-9f92d07e7495","type":"Line"},{"attributes":{},"id":"119b04a6-f9d6-4285-b8a8-cb30ebcfa324","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"6753cb56-1169-495f-a8a2-4098ec0576cf","type":"Line"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"2eb46699-26c1-47c2-a72b-7358e27e8306","type":"Range1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"4cb01b3d-780d-4267-8adb-d517151fa321","type":"Line"},{"attributes":{},"id":"5287d1dd-0dcf-4216-82be-a2f4686deade","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"eec38408-0fbc-43a9-81ff-99c89cd90df3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f5d81c54-6fed-44fc-93c4-8d610e6b2332","type":"ColumnDataSource"},"glyph":{"id":"2ed1396d-a814-4e7d-8bca-c75d9495ca5d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"00c20c17-b50b-4087-b93e-daa822bb0888","type":"Circle"},"selection_glyph":null},"id":"90b5bbb7-4b68-49f2-90dd-3191831e7d20","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"f5d81c54-6fed-44fc-93c4-8d610e6b2332","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6132b1ca-7faf-48d1-b8d9-a6b10ddf465c","subtype":"Figure","type":"Plot"},"ticker":{"id":"119b04a6-f9d6-4285-b8a8-cb30ebcfa324","type":"BasicTicker"}},"id":"29707611-5fd2-4c16-b22a-3b708f770555","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f58769f-bdb0-4c5d-bd78-b747d5699653","type":"Line"},{"attributes":{"data_source":{"id":"eec38408-0fbc-43a9-81ff-99c89cd90df3","type":"ColumnDataSource"},"glyph":{"id":"7d6eb556-e780-4abf-ab1d-492d94822354","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"6753cb56-1169-495f-a8a2-4098ec0576cf","type":"Line"},"selection_glyph":null},"id":"c2ab5d24-67f2-4d63-be60-ca79b477d6da","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ed1396d-a814-4e7d-8bca-c75d9495ca5d","type":"Circle"},{"attributes":{"data_source":{"id":"3439dc2a-d73a-46bf-a415-fb34373e3ec0","type":"ColumnDataSource"},"glyph":{"id":"6b40a0da-24d7-4ff5-89f4-3802fc086ba9","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"10796d06-52f2-4ae3-b7e6-9f92d07e7495","type":"Line"},"selection_glyph":null},"id":"5b633ad0-9951-4d13-8dc2-48a867019c29","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"6132b1ca-7faf-48d1-b8d9-a6b10ddf465c","subtype":"Figure","type":"Plot"},"ticker":{"id":"8824abae-2e16-4026-a3c4-47a48c7e3eec","type":"LogTicker"}},"id":"b8fef5da-b5c4-4eab-8f99-3bf65ac8e5f7","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"3439dc2a-d73a-46bf-a415-fb34373e3ec0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7bf4cc96-f134-4160-b876-4917854e8b18","type":"ColumnDataSource"},"glyph":{"id":"1001a7a1-8e2c-46ea-9c44-0d5d911fc4ec","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"2680adb7-6b9e-42e4-90f8-0ca577a16b7d","type":"Circle"},"selection_glyph":null},"id":"e93725fd-8be8-4d1d-a2a6-30d26b820c93","type":"GlyphRenderer"},{"attributes":{"num_minor_ticks":10},"id":"8824abae-2e16-4026-a3c4-47a48c7e3eec","type":"LogTicker"},{"attributes":{"axis_label":"sections","formatter":{"id":"5287d1dd-0dcf-4216-82be-a2f4686deade","type":"BasicTickFormatter"},"plot":{"id":"6132b1ca-7faf-48d1-b8d9-a6b10ddf465c","subtype":"Figure","type":"Plot"},"ticker":{"id":"119b04a6-f9d6-4285-b8a8-cb30ebcfa324","type":"BasicTicker"}},"id":"7f8ec7b4-26d5-4b97-9be2-e397a51c1b33","type":"LinearAxis"},{"attributes":{"callback":null},"id":"31ad83db-fe71-4954-831a-5dbc704af294","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"7bf4cc96-f134-4160-b876-4917854e8b18","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b40a0da-24d7-4ff5-89f4-3802fc086ba9","type":"Line"},{"attributes":{"data_source":{"id":"9afa83bb-09ec-4011-95f6-476cdcc9f47a","type":"ColumnDataSource"},"glyph":{"id":"1d4dec31-0ec1-49b2-bb7c-f0f7bdfc80d6","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"ddbd3e6a-e81d-4b93-a0ea-e4c147ab21ca","type":"Line"},"selection_glyph":null},"id":"433b7b1e-363c-44c6-bcac-11033d848625","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"7d6eb556-e780-4abf-ab1d-492d94822354","type":"Line"},{"attributes":{"axis_label":"particles","formatter":{"id":"c132eab6-abf2-4c2e-a830-b214d2ec9e2b","type":"LogTickFormatter"},"plot":{"id":"6132b1ca-7faf-48d1-b8d9-a6b10ddf465c","subtype":"Figure","type":"Plot"},"ticker":{"id":"8824abae-2e16-4026-a3c4-47a48c7e3eec","type":"LogTicker"}},"id":"960654b1-62fa-47ed-ac5d-767708501b55","type":"LogAxis"},{"attributes":{"below":[{"id":"7f8ec7b4-26d5-4b97-9be2-e397a51c1b33","type":"LinearAxis"}],"left":[{"id":"960654b1-62fa-47ed-ac5d-767708501b55","type":"LogAxis"}],"renderers":[{"id":"7f8ec7b4-26d5-4b97-9be2-e397a51c1b33","type":"LinearAxis"},{"id":"29707611-5fd2-4c16-b22a-3b708f770555","type":"Grid"},{"id":"960654b1-62fa-47ed-ac5d-767708501b55","type":"LogAxis"},{"id":"b8fef5da-b5c4-4eab-8f99-3bf65ac8e5f7","type":"Grid"},{"id":"49e5c39f-25f0-46e3-bd62-0424903e6809","type":"BoxAnnotation"},{"id":"0c9f5b31-4b4d-4b1e-873b-fa73e0707690","type":"Legend"},{"id":"433b7b1e-363c-44c6-bcac-11033d848625","type":"GlyphRenderer"},{"id":"90b5bbb7-4b68-49f2-90dd-3191831e7d20","type":"GlyphRenderer"},{"id":"67cf3ce4-9995-47f2-95fc-259d32fcad21","type":"GlyphRenderer"},{"id":"5b633ad0-9951-4d13-8dc2-48a867019c29","type":"GlyphRenderer"},{"id":"e93725fd-8be8-4d1d-a2a6-30d26b820c93","type":"GlyphRenderer"},{"id":"c2ab5d24-67f2-4d63-be60-ca79b477d6da","type":"GlyphRenderer"}],"title":{"id":"5ed73ec1-65aa-465d-8930-b9565437cf37","type":"Title"},"tool_events":{"id":"ac77d83a-1297-4405-b958-baa952db3e40","type":"ToolEvents"},"toolbar":{"id":"217c00be-a3a7-4fe6-bae1-85093bb145f5","type":"Toolbar"},"x_range":{"id":"31ad83db-fe71-4954-831a-5dbc704af294","type":"DataRange1d"},"y_mapper_type":"log","y_range":{"id":"2eb46699-26c1-47c2-a72b-7358e27e8306","type":"Range1d"}},"id":"6132b1ca-7faf-48d1-b8d9-a6b10ddf465c","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d4dec31-0ec1-49b2-bb7c-f0f7bdfc80d6","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"00c20c17-b50b-4087-b93e-daa822bb0888","type":"Circle"},{"attributes":{"plot":null,"text":"log axis example"},"id":"5ed73ec1-65aa-465d-8930-b9565437cf37","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"49e5c39f-25f0-46e3-bd62-0424903e6809","type":"BoxAnnotation"}],"root_ids":["6132b1ca-7faf-48d1-b8d9-a6b10ddf465c"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"28427e1a-f984-4e39-9183-29440fdd40e3","elementid":"e7f9a410-d7ee-448e-8a81-eb44a0d77ec2","modelid":"6132b1ca-7faf-48d1-b8d9-a6b10ddf465c"}];
              
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