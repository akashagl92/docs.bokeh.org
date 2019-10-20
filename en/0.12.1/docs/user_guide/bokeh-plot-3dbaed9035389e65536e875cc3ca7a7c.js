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
      };var element = document.getElementById("c4112534-60a2-4846-bf93-a8ccae9cd5f5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c4112534-60a2-4846-bf93-a8ccae9cd5f5' but no matching script tag was found. ")
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
              var docs_json = {"b9e10f17-778b-404c-b4f4-7efee1b99ccd":{"roots":{"references":[{"attributes":{"plot":{"id":"a7a37b02-955f-46b9-bfd9-c96eccbde683","subtype":"Figure","type":"Plot"}},"id":"e2296992-3e0b-4621-9f3b-44b62f0d2212","type":"WheelZoomTool"},{"attributes":{},"id":"db029666-762c-4bb0-a82d-e72e2181b695","type":"BasicTicker"},{"attributes":{},"id":"469b6d93-2fdc-494f-925d-a1f26e94cdbd","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"86efc8e0-0120-4fe8-9a4a-2e0351b267ea","type":"DataRange1d"},{"attributes":{},"id":"9114f021-26a9-4501-bdb0-8cb3a10fa542","type":"BasicTickFormatter"},{"attributes":{},"id":"12fa59be-24fb-4684-8145-a6451fceb4bf","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"66382552-557a-43fc-817b-f2b3e80a2669","type":"Circle"},{"attributes":{"plot":{"id":"a7a37b02-955f-46b9-bfd9-c96eccbde683","subtype":"Figure","type":"Plot"}},"id":"7137c6ad-fd71-4147-ad92-2bd87859ff6d","type":"ResetTool"},{"attributes":{"formatter":{"id":"9114f021-26a9-4501-bdb0-8cb3a10fa542","type":"BasicTickFormatter"},"plot":{"id":"a7a37b02-955f-46b9-bfd9-c96eccbde683","subtype":"Figure","type":"Plot"},"ticker":{"id":"da596b42-0e7e-47ed-9e06-280d4b9b3370","type":"BasicTicker"}},"id":"ee6b1f59-626b-468d-a114-7aa3da0f420c","type":"LinearAxis"},{"attributes":{"below":[{"id":"b76576d2-3cb4-4a92-b692-0a880cc48239","type":"LinearAxis"}],"left":[{"id":"ee6b1f59-626b-468d-a114-7aa3da0f420c","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"b76576d2-3cb4-4a92-b692-0a880cc48239","type":"LinearAxis"},{"id":"ebdf3d07-98b7-4b0f-9211-37432e1210b9","type":"Grid"},{"id":"ee6b1f59-626b-468d-a114-7aa3da0f420c","type":"LinearAxis"},{"id":"be0e004a-4ecc-4a5b-8a69-a5d10e1ee6f7","type":"Grid"},{"id":"af678676-109b-4f18-8874-d3a09ffa8d4d","type":"BoxAnnotation"},{"id":"aff0067d-5462-456c-a541-30147cd2fe46","type":"GlyphRenderer"}],"title":{"id":"920b079b-72b9-4fce-936b-d805cf9c4053","type":"Title"},"tool_events":{"id":"12fa59be-24fb-4684-8145-a6451fceb4bf","type":"ToolEvents"},"toolbar":{"id":"5d943c6c-0c05-4f08-b750-ffe0d8f3ce82","type":"Toolbar"},"x_range":{"id":"ab3ec071-a9a2-4617-b725-c1009997bb30","type":"DataRange1d"},"y_range":{"id":"86efc8e0-0120-4fe8-9a4a-2e0351b267ea","type":"DataRange1d"}},"id":"a7a37b02-955f-46b9-bfd9-c96eccbde683","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"a7a37b02-955f-46b9-bfd9-c96eccbde683","subtype":"Figure","type":"Plot"},"ticker":{"id":"db029666-762c-4bb0-a82d-e72e2181b695","type":"BasicTicker"}},"id":"ebdf3d07-98b7-4b0f-9211-37432e1210b9","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"542b523a-756f-4593-ab34-c5d28c2ac83d","type":"PanTool"},{"id":"e2296992-3e0b-4621-9f3b-44b62f0d2212","type":"WheelZoomTool"},{"id":"a6305275-5b6b-4674-9f01-9e81c43ebe0e","type":"BoxZoomTool"},{"id":"7d613c32-889c-4567-803b-3592fa00c589","type":"SaveTool"},{"id":"7137c6ad-fd71-4147-ad92-2bd87859ff6d","type":"ResetTool"},{"id":"9c6f9787-0bda-4f63-adca-56c38adf626f","type":"HelpTool"}]},"id":"5d943c6c-0c05-4f08-b750-ffe0d8f3ce82","type":"Toolbar"},{"attributes":{"plot":{"id":"a7a37b02-955f-46b9-bfd9-c96eccbde683","subtype":"Figure","type":"Plot"}},"id":"7d613c32-889c-4567-803b-3592fa00c589","type":"SaveTool"},{"attributes":{"plot":null,"text":null},"id":"920b079b-72b9-4fce-936b-d805cf9c4053","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"cbe2650d-bba9-4b61-995b-4f0ceee61135","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"cbe2650d-bba9-4b61-995b-4f0ceee61135","type":"ColumnDataSource"},"glyph":{"id":"2f9bff2b-6907-4c0a-85bf-26f025e3469c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"66382552-557a-43fc-817b-f2b3e80a2669","type":"Circle"},"selection_glyph":null},"id":"aff0067d-5462-456c-a541-30147cd2fe46","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"a7a37b02-955f-46b9-bfd9-c96eccbde683","subtype":"Figure","type":"Plot"},"ticker":{"id":"da596b42-0e7e-47ed-9e06-280d4b9b3370","type":"BasicTicker"}},"id":"be0e004a-4ecc-4a5b-8a69-a5d10e1ee6f7","type":"Grid"},{"attributes":{"plot":{"id":"a7a37b02-955f-46b9-bfd9-c96eccbde683","subtype":"Figure","type":"Plot"}},"id":"542b523a-756f-4593-ab34-c5d28c2ac83d","type":"PanTool"},{"attributes":{},"id":"da596b42-0e7e-47ed-9e06-280d4b9b3370","type":"BasicTicker"},{"attributes":{"overlay":{"id":"af678676-109b-4f18-8874-d3a09ffa8d4d","type":"BoxAnnotation"},"plot":{"id":"a7a37b02-955f-46b9-bfd9-c96eccbde683","subtype":"Figure","type":"Plot"}},"id":"a6305275-5b6b-4674-9f01-9e81c43ebe0e","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f9bff2b-6907-4c0a-85bf-26f025e3469c","type":"Circle"},{"attributes":{"plot":{"id":"a7a37b02-955f-46b9-bfd9-c96eccbde683","subtype":"Figure","type":"Plot"}},"id":"9c6f9787-0bda-4f63-adca-56c38adf626f","type":"HelpTool"},{"attributes":{"callback":null},"id":"ab3ec071-a9a2-4617-b725-c1009997bb30","type":"DataRange1d"},{"attributes":{"formatter":{"id":"469b6d93-2fdc-494f-925d-a1f26e94cdbd","type":"BasicTickFormatter"},"plot":{"id":"a7a37b02-955f-46b9-bfd9-c96eccbde683","subtype":"Figure","type":"Plot"},"ticker":{"id":"db029666-762c-4bb0-a82d-e72e2181b695","type":"BasicTicker"}},"id":"b76576d2-3cb4-4a92-b692-0a880cc48239","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"af678676-109b-4f18-8874-d3a09ffa8d4d","type":"BoxAnnotation"}],"root_ids":["a7a37b02-955f-46b9-bfd9-c96eccbde683"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"b9e10f17-778b-404c-b4f4-7efee1b99ccd","elementid":"c4112534-60a2-4846-bf93-a8ccae9cd5f5","modelid":"a7a37b02-955f-46b9-bfd9-c96eccbde683"}];
              
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