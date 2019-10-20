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
      };var element = document.getElementById("7e89f60e-cb00-41fb-a2e3-676579500b7b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7e89f60e-cb00-41fb-a2e3-676579500b7b' but no matching script tag was found. ")
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
              var docs_json = {"0b1cf14f-d095-4cff-bc62-8e43b96c0b78":{"roots":{"references":[{"attributes":{"plot":null,"text":"Select Below"},"id":"311e9ce3-8497-478f-9668-8fcf9edc9d95","type":"Title"},{"attributes":{"callback":{"id":"66d71eaf-fa0c-4593-9be1-a2fe40be64ff","type":"CustomJS"},"overlay":{"id":"b5316cf0-85a2-4cd3-a2ba-cd261e99b93e","type":"BoxAnnotation"},"plot":{"id":"ce7478e9-c1b0-4c84-9b38-3350507db854","subtype":"Figure","type":"Plot"}},"id":"7e4c1769-b276-4421-b048-e5f353cae3f2","type":"BoxSelectTool"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"#009933"},"height":{"field":"height","units":"data"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"904e974d-7d07-46dd-961c-2bb6f9005256","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","width","height","x"],"data":{"height":[],"width":[],"x":[],"y":[]}},"id":"a750e04b-eb1b-4a4e-96ea-b500f0f57102","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"cc4890ff-e33c-47d8-80ef-8152620b90a3","type":"LinearAxis"}],"left":[{"id":"3d8a83b8-f9e9-4078-8e2e-6eea5405153f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cc4890ff-e33c-47d8-80ef-8152620b90a3","type":"LinearAxis"},{"id":"46143a59-c58e-4c9f-92fa-a251ca182f7a","type":"Grid"},{"id":"3d8a83b8-f9e9-4078-8e2e-6eea5405153f","type":"LinearAxis"},{"id":"6f0f497d-d481-4019-9c2b-f5460e920b0c","type":"Grid"},{"id":"b5316cf0-85a2-4cd3-a2ba-cd261e99b93e","type":"BoxAnnotation"},{"id":"ead2ea0e-c5d4-4613-803e-c32f85559391","type":"GlyphRenderer"}],"title":{"id":"311e9ce3-8497-478f-9668-8fcf9edc9d95","type":"Title"},"tool_events":{"id":"1031eb05-efcc-4fd0-b3e4-191921d7fd1a","type":"ToolEvents"},"toolbar":{"id":"06415c5a-f9bb-4511-8b26-a7e1828fc4ea","type":"Toolbar"},"x_range":{"id":"e98df810-969d-4b60-bba1-419ffba5222a","type":"Range1d"},"y_range":{"id":"8930cd61-1894-4e7a-8dfb-70a2195ce61f","type":"Range1d"}},"id":"ce7478e9-c1b0-4c84-9b38-3350507db854","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7e4c1769-b276-4421-b048-e5f353cae3f2","type":"BoxSelectTool"}]},"id":"06415c5a-f9bb-4511-8b26-a7e1828fc4ea","type":"Toolbar"},{"attributes":{},"id":"8daf6481-0da6-4763-b2dd-c1324e5f5e90","type":"BasicTicker"},{"attributes":{"plot":{"id":"ce7478e9-c1b0-4c84-9b38-3350507db854","subtype":"Figure","type":"Plot"},"ticker":{"id":"68142b26-753b-484b-b876-c02887f216b2","type":"BasicTicker"}},"id":"46143a59-c58e-4c9f-92fa-a251ca182f7a","type":"Grid"},{"attributes":{},"id":"1031eb05-efcc-4fd0-b3e4-191921d7fd1a","type":"ToolEvents"},{"attributes":{"args":{"source":{"id":"a750e04b-eb1b-4a4e-96ea-b500f0f57102","type":"ColumnDataSource"}},"code":"\n        // get data source from Callback args\n        var data = source.get('data');\n\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\n        var geometry = cb_data['geometry'];\n\n        /// calculate Rect attributes\n        var width = geometry['x1'] - geometry['x0'];\n        var height = geometry['y1'] - geometry['y0'];\n        var x = geometry['x0'] + width/2;\n        var y = geometry['y0'] + height/2;\n\n        /// update data source with new Rect attributes\n        data['x'].push(x);\n        data['y'].push(y);\n        data['width'].push(width);\n        data['height'].push(height);\n\n        // trigger update of data source\n        source.trigger('change');\n    "},"id":"66d71eaf-fa0c-4593-9be1-a2fe40be64ff","type":"CustomJS"},{"attributes":{"callback":null},"id":"e98df810-969d-4b60-bba1-419ffba5222a","type":"Range1d"},{"attributes":{},"id":"8a26f3c1-0f34-494c-b7d6-547e0fa6aa72","type":"BasicTickFormatter"},{"attributes":{},"id":"68142b26-753b-484b-b876-c02887f216b2","type":"BasicTicker"},{"attributes":{"callback":null},"id":"8930cd61-1894-4e7a-8dfb-70a2195ce61f","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"ce7478e9-c1b0-4c84-9b38-3350507db854","subtype":"Figure","type":"Plot"},"ticker":{"id":"8daf6481-0da6-4763-b2dd-c1324e5f5e90","type":"BasicTicker"}},"id":"6f0f497d-d481-4019-9c2b-f5460e920b0c","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b5316cf0-85a2-4cd3-a2ba-cd261e99b93e","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"a750e04b-eb1b-4a4e-96ea-b500f0f57102","type":"ColumnDataSource"},"glyph":{"id":"904e974d-7d07-46dd-961c-2bb6f9005256","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"904e974d-7d07-46dd-961c-2bb6f9005256","type":"Rect"},"selection_glyph":{"id":"904e974d-7d07-46dd-961c-2bb6f9005256","type":"Rect"}},"id":"ead2ea0e-c5d4-4613-803e-c32f85559391","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"97b9d470-9389-4509-82f6-4a02579c1d46","type":"BasicTickFormatter"},"plot":{"id":"ce7478e9-c1b0-4c84-9b38-3350507db854","subtype":"Figure","type":"Plot"},"ticker":{"id":"68142b26-753b-484b-b876-c02887f216b2","type":"BasicTicker"}},"id":"cc4890ff-e33c-47d8-80ef-8152620b90a3","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8a26f3c1-0f34-494c-b7d6-547e0fa6aa72","type":"BasicTickFormatter"},"plot":{"id":"ce7478e9-c1b0-4c84-9b38-3350507db854","subtype":"Figure","type":"Plot"},"ticker":{"id":"8daf6481-0da6-4763-b2dd-c1324e5f5e90","type":"BasicTicker"}},"id":"3d8a83b8-f9e9-4078-8e2e-6eea5405153f","type":"LinearAxis"},{"attributes":{},"id":"97b9d470-9389-4509-82f6-4a02579c1d46","type":"BasicTickFormatter"}],"root_ids":["ce7478e9-c1b0-4c84-9b38-3350507db854"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"0b1cf14f-d095-4cff-bc62-8e43b96c0b78","elementid":"7e89f60e-cb00-41fb-a2e3-676579500b7b","modelid":"ce7478e9-c1b0-4c84-9b38-3350507db854"}];
              
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