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
      };var element = document.getElementById("cae03f52-8e55-4ca1-8b41-6ebb401c6348");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cae03f52-8e55-4ca1-8b41-6ebb401c6348' but no matching script tag was found. ")
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
              var docs_json = {"b11b0ccc-0bc8-4365-be37-43e4024b5f66":{"roots":{"references":[{"attributes":{"below":[{"id":"65286f6e-9bad-4e77-8e5b-242da04b64da","type":"LinearAxis"}],"left":[{"id":"09cb3f76-e938-44b1-97a2-20a2c15e05aa","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"65286f6e-9bad-4e77-8e5b-242da04b64da","type":"LinearAxis"},{"id":"b5fef3a3-113a-4d80-b0a9-30bd1875f3e1","type":"Grid"},{"id":"09cb3f76-e938-44b1-97a2-20a2c15e05aa","type":"LinearAxis"},{"id":"648fa613-1fba-4549-8875-ba56bc147459","type":"Grid"},{"id":"04f4047e-6674-47a7-8242-15a048dd7600","type":"BoxAnnotation"},{"id":"67b057d9-0122-4e39-aa2b-fb7c030d89a3","type":"GlyphRenderer"}],"title":{"id":"71c26ceb-13a4-40b1-a577-95a01941423d","type":"Title"},"tool_events":{"id":"d07dc6e6-9239-4f07-912b-2eac2ceb6ef7","type":"ToolEvents"},"toolbar":{"id":"83fd1313-21f4-4eaa-bba9-fc6c5bc148df","type":"Toolbar"},"x_range":{"id":"5e55def7-ef7e-4f84-bc39-584a1103699c","type":"DataRange1d"},"y_range":{"id":"9d4ea37a-374e-40aa-8ca3-d13e7f384cfa","type":"DataRange1d"}},"id":"85d67533-0531-44de-aa74-0203d09536bf","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"04f4047e-6674-47a7-8242-15a048dd7600","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"5836384a-d59b-44cd-8d25-536941e0b833","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"plot":{"id":"85d67533-0531-44de-aa74-0203d09536bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c6bcf8d-2c07-4462-9704-864005e881a0","type":"BasicTicker"}},"id":"09cb3f76-e938-44b1-97a2-20a2c15e05aa","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c4f854da-b7a0-41eb-a335-b54d1ce05527","type":"ColumnDataSource"},"glyph":{"id":"3468a07a-789b-4cb3-a971-744dbdfbcdb7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d73f07ce-188d-46d0-9920-b4ac78b129d8","type":"Circle"},"selection_glyph":null},"id":"67b057d9-0122-4e39-aa2b-fb7c030d89a3","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"85d67533-0531-44de-aa74-0203d09536bf","subtype":"Figure","type":"Plot"}},"id":"a0381bd5-2a47-43fe-a038-00a737563cc6","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"85d67533-0531-44de-aa74-0203d09536bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"8c101948-b204-4a40-8939-b797725cc0ea","type":"BasicTicker"}},"id":"b5fef3a3-113a-4d80-b0a9-30bd1875f3e1","type":"Grid"},{"attributes":{"formatter":{"id":"bc8c4fc4-7da3-41fb-9a15-fc53950e9e0a","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"plot":{"id":"85d67533-0531-44de-aa74-0203d09536bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"8c101948-b204-4a40-8939-b797725cc0ea","type":"BasicTicker"}},"id":"65286f6e-9bad-4e77-8e5b-242da04b64da","type":"LinearAxis"},{"attributes":{},"id":"5836384a-d59b-44cd-8d25-536941e0b833","type":"BasicTickFormatter"},{"attributes":{},"id":"8c101948-b204-4a40-8939-b797725cc0ea","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3468a07a-789b-4cb3-a971-744dbdfbcdb7","type":"Circle"},{"attributes":{"overlay":{"id":"04f4047e-6674-47a7-8242-15a048dd7600","type":"BoxAnnotation"},"plot":{"id":"85d67533-0531-44de-aa74-0203d09536bf","subtype":"Figure","type":"Plot"}},"id":"45ebf785-5d4e-4ca2-bbcb-dac59549812e","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d73f07ce-188d-46d0-9920-b4ac78b129d8","type":"Circle"},{"attributes":{"callback":null},"id":"5e55def7-ef7e-4f84-bc39-584a1103699c","type":"DataRange1d"},{"attributes":{"plot":{"id":"85d67533-0531-44de-aa74-0203d09536bf","subtype":"Figure","type":"Plot"}},"id":"f8cb9234-ef02-4f5e-8f7b-475ba9d885cd","type":"PanTool"},{"attributes":{},"id":"2c6bcf8d-2c07-4462-9704-864005e881a0","type":"BasicTicker"},{"attributes":{"plot":{"id":"85d67533-0531-44de-aa74-0203d09536bf","subtype":"Figure","type":"Plot"}},"id":"ecdb0539-087c-4f5c-9981-4fbf56088b5c","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"85d67533-0531-44de-aa74-0203d09536bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c6bcf8d-2c07-4462-9704-864005e881a0","type":"BasicTicker"}},"id":"648fa613-1fba-4549-8875-ba56bc147459","type":"Grid"},{"attributes":{},"id":"d07dc6e6-9239-4f07-912b-2eac2ceb6ef7","type":"ToolEvents"},{"attributes":{"plot":{"id":"85d67533-0531-44de-aa74-0203d09536bf","subtype":"Figure","type":"Plot"}},"id":"1bc5f943-fb17-4d43-ade7-92e402887cf3","type":"HelpTool"},{"attributes":{"plot":{"id":"85d67533-0531-44de-aa74-0203d09536bf","subtype":"Figure","type":"Plot"}},"id":"3985eec0-aa19-49ce-b186-c4e68257b79e","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"c4f854da-b7a0-41eb-a335-b54d1ce05527","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"9d4ea37a-374e-40aa-8ca3-d13e7f384cfa","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f8cb9234-ef02-4f5e-8f7b-475ba9d885cd","type":"PanTool"},{"id":"a0381bd5-2a47-43fe-a038-00a737563cc6","type":"WheelZoomTool"},{"id":"45ebf785-5d4e-4ca2-bbcb-dac59549812e","type":"BoxZoomTool"},{"id":"3985eec0-aa19-49ce-b186-c4e68257b79e","type":"SaveTool"},{"id":"ecdb0539-087c-4f5c-9981-4fbf56088b5c","type":"ResetTool"},{"id":"1bc5f943-fb17-4d43-ade7-92e402887cf3","type":"HelpTool"}]},"id":"83fd1313-21f4-4eaa-bba9-fc6c5bc148df","type":"Toolbar"},{"attributes":{"plot":null,"text":null},"id":"71c26ceb-13a4-40b1-a577-95a01941423d","type":"Title"},{"attributes":{},"id":"bc8c4fc4-7da3-41fb-9a15-fc53950e9e0a","type":"BasicTickFormatter"}],"root_ids":["85d67533-0531-44de-aa74-0203d09536bf"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"b11b0ccc-0bc8-4365-be37-43e4024b5f66","elementid":"cae03f52-8e55-4ca1-8b41-6ebb401c6348","modelid":"85d67533-0531-44de-aa74-0203d09536bf"}];
              
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