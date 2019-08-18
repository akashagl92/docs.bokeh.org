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
      };var element = document.getElementById("bcd49d38-16ae-478d-a014-4a01e2507d38");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bcd49d38-16ae-478d-a014-4a01e2507d38' but no matching script tag was found. ")
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
              var docs_json = {"26aaefcd-7afa-4975-a2c1-d8eb3d5d8eb5":{"roots":{"references":[{"attributes":{},"id":"4515d864-3395-4b04-94bb-317937eff406","type":"ToolEvents"},{"attributes":{"formatter":{"id":"9f272462-540f-436f-ad53-f3727e524bba","type":"BasicTickFormatter"},"plot":{"id":"4ec14b70-7ad1-4ce7-a707-9befde58cf89","subtype":"Figure","type":"Plot"},"ticker":{"id":"2cb3b3c8-43d9-410d-882c-ae0caaf7a477","type":"BasicTicker"}},"id":"6e73451d-6611-4046-99c2-f7f4e34dd233","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ba6e1422-4df1-4bb5-8218-5205d3cc7c25","type":"PanTool"},{"id":"fda8ebfd-e586-4d36-850b-9784516d7d6f","type":"WheelZoomTool"},{"id":"16252bf9-4c0f-4108-9a40-e58fff77a111","type":"BoxZoomTool"},{"id":"81c4f8a3-3302-44e3-be5d-43bec69759db","type":"SaveTool"},{"id":"7d8665d6-9bcf-4272-ab38-52946a33c004","type":"ResetTool"},{"id":"85106f6f-a1d7-481c-868f-765e5d905006","type":"HelpTool"}]},"id":"41e42871-a52b-4bbc-b76f-5b5bd3ecb64a","type":"Toolbar"},{"attributes":{},"id":"7e58d112-8b6c-45bd-b6df-cf9b67eaacb1","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"96744e62-3c2a-497c-ade5-00707a0e453a","type":"BoxAnnotation"},"plot":{"id":"4ec14b70-7ad1-4ce7-a707-9befde58cf89","subtype":"Figure","type":"Plot"}},"id":"16252bf9-4c0f-4108-9a40-e58fff77a111","type":"BoxZoomTool"},{"attributes":{},"id":"9f272462-540f-436f-ad53-f3727e524bba","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"30f004c7-722e-4293-b042-a7ac3cccb527","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7e58d112-8b6c-45bd-b6df-cf9b67eaacb1","type":"BasicTickFormatter"},"plot":{"id":"4ec14b70-7ad1-4ce7-a707-9befde58cf89","subtype":"Figure","type":"Plot"},"ticker":{"id":"b0894238-f946-403a-8bd5-de6d91c6839b","type":"BasicTicker"}},"id":"70b20b7d-6ef8-4ac1-a22d-30cf1c618492","type":"LinearAxis"},{"attributes":{"below":[{"id":"70b20b7d-6ef8-4ac1-a22d-30cf1c618492","type":"LinearAxis"},{"id":"cb761d49-7bd5-49db-8d45-e8cc9ede4d55","type":"Title"}],"left":[{"id":"6e73451d-6611-4046-99c2-f7f4e34dd233","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"70b20b7d-6ef8-4ac1-a22d-30cf1c618492","type":"LinearAxis"},{"id":"54c6119d-84f3-43d2-b104-014a3597ce4c","type":"Grid"},{"id":"6e73451d-6611-4046-99c2-f7f4e34dd233","type":"LinearAxis"},{"id":"a6d089a4-df29-43fa-8274-8711d6ea5020","type":"Grid"},{"id":"96744e62-3c2a-497c-ade5-00707a0e453a","type":"BoxAnnotation"},{"id":"285f06e6-3284-4d72-b750-c2a71631dd56","type":"GlyphRenderer"},{"id":"cb761d49-7bd5-49db-8d45-e8cc9ede4d55","type":"Title"}],"title":{"id":"906cd9e2-462c-43f8-bd4d-5e1548175068","type":"Title"},"title_location":"left","tool_events":{"id":"4515d864-3395-4b04-94bb-317937eff406","type":"ToolEvents"},"toolbar":{"id":"41e42871-a52b-4bbc-b76f-5b5bd3ecb64a","type":"Toolbar"},"x_range":{"id":"dce6ed40-5bd8-4af6-972e-30b9d9a4d97a","type":"DataRange1d"},"y_range":{"id":"30f004c7-722e-4293-b042-a7ac3cccb527","type":"DataRange1d"}},"id":"4ec14b70-7ad1-4ce7-a707-9befde58cf89","subtype":"Figure","type":"Plot"},{"attributes":{"align":"center","plot":{"id":"4ec14b70-7ad1-4ce7-a707-9befde58cf89","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"cb761d49-7bd5-49db-8d45-e8cc9ede4d55","type":"Title"},{"attributes":{"plot":{"id":"4ec14b70-7ad1-4ce7-a707-9befde58cf89","subtype":"Figure","type":"Plot"}},"id":"81c4f8a3-3302-44e3-be5d-43bec69759db","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"28df9235-f26b-4417-8b7c-d0c9ce6007a8","type":"Circle"},{"attributes":{"plot":{"id":"4ec14b70-7ad1-4ce7-a707-9befde58cf89","subtype":"Figure","type":"Plot"}},"id":"ba6e1422-4df1-4bb5-8218-5205d3cc7c25","type":"PanTool"},{"attributes":{"plot":{"id":"4ec14b70-7ad1-4ce7-a707-9befde58cf89","subtype":"Figure","type":"Plot"}},"id":"fda8ebfd-e586-4d36-850b-9784516d7d6f","type":"WheelZoomTool"},{"attributes":{},"id":"b0894238-f946-403a-8bd5-de6d91c6839b","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96744e62-3c2a-497c-ade5-00707a0e453a","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"6c6b34c3-d25f-4e14-bc0b-6046503cd504","type":"ColumnDataSource"},"glyph":{"id":"28df9235-f26b-4417-8b7c-d0c9ce6007a8","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ec8a6999-c545-46ae-bd7e-c37f69844ca4","type":"Circle"},"selection_glyph":null},"id":"285f06e6-3284-4d72-b750-c2a71631dd56","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Left Title"},"id":"906cd9e2-462c-43f8-bd4d-5e1548175068","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ec8a6999-c545-46ae-bd7e-c37f69844ca4","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"4ec14b70-7ad1-4ce7-a707-9befde58cf89","subtype":"Figure","type":"Plot"},"ticker":{"id":"2cb3b3c8-43d9-410d-882c-ae0caaf7a477","type":"BasicTicker"}},"id":"a6d089a4-df29-43fa-8274-8711d6ea5020","type":"Grid"},{"attributes":{"plot":{"id":"4ec14b70-7ad1-4ce7-a707-9befde58cf89","subtype":"Figure","type":"Plot"}},"id":"7d8665d6-9bcf-4272-ab38-52946a33c004","type":"ResetTool"},{"attributes":{"plot":{"id":"4ec14b70-7ad1-4ce7-a707-9befde58cf89","subtype":"Figure","type":"Plot"}},"id":"85106f6f-a1d7-481c-868f-765e5d905006","type":"HelpTool"},{"attributes":{"callback":null},"id":"dce6ed40-5bd8-4af6-972e-30b9d9a4d97a","type":"DataRange1d"},{"attributes":{"plot":{"id":"4ec14b70-7ad1-4ce7-a707-9befde58cf89","subtype":"Figure","type":"Plot"},"ticker":{"id":"b0894238-f946-403a-8bd5-de6d91c6839b","type":"BasicTicker"}},"id":"54c6119d-84f3-43d2-b104-014a3597ce4c","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"6c6b34c3-d25f-4e14-bc0b-6046503cd504","type":"ColumnDataSource"},{"attributes":{},"id":"2cb3b3c8-43d9-410d-882c-ae0caaf7a477","type":"BasicTicker"}],"root_ids":["4ec14b70-7ad1-4ce7-a707-9befde58cf89"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"26aaefcd-7afa-4975-a2c1-d8eb3d5d8eb5","elementid":"bcd49d38-16ae-478d-a014-4a01e2507d38","modelid":"4ec14b70-7ad1-4ce7-a707-9befde58cf89"}];
              
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