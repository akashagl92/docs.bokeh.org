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
      };var element = document.getElementById("b9cea5d9-2407-4015-96ee-343136622749");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9cea5d9-2407-4015-96ee-343136622749' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js'];
    
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
          LatexLabel: require("custom/latex_label"),
          MyFormatter: require("custom/my_formatter"),
          Surface3d: require("custom/surface3d") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/draw_tool": "\np = require \"core/properties\"\nGestureTool = require \"models/tools/gestures/gesture_tool\"\n\nclass DrawToolView extends GestureTool.View\n\n  # this is executed when the pan/drag event starts\n  _pan_start: (e) ->\n    @model.source.data = {x: [], y: []}\n\n  # this is executed on subsequent mouse/touch moves\n  _pan: (e) ->\n    frame = @plot_model.frame\n    canvas = @plot_view.canvas\n\n    vx = canvas.sx_to_vx(e.bokeh.sx)\n    vy = canvas.sy_to_vy(e.bokeh.sy)\n    if not frame.contains(vx, vy)\n      return null\n\n    x = frame.get(\'x_mappers\').default.map_from_target(vx)\n    y = frame.get(\'y_mappers\').default.map_from_target(vy)\n\n    @model.source.data.x.push(x)\n    @model.source.data.y.push(y)\n    @model.source.trigger(\'change\')\n\n  # this is executed then the pan/drag ends\n  _pan_end: (e) -> return null\n\nclass DrawTool extends GestureTool.Model\n  default_view: DrawToolView\n  type: \"DrawTool\"\n\n  tool_name: \"Drag Span\"\n  icon: \"bk-tool-icon-lasso-select\"\n  event_type: \"pan\"\n  default_order: 12\n\n  @define { source: [ p.Instance ] }\n\nmodule.exports =\n  Model: DrawTool\n  View: DrawToolView\n",
          "custom/latex_label": "\nLabel = require \"models/annotations/label\"\n\nclass LatexLabelView extends Label.View\n  render: () ->\n\n    #--- Start of copied section from ``Label.render`` implementation\n\n    ctx = @plot_view.canvas_view.ctx\n\n    # Here because AngleSpec does units tranform and label doesn\'t support specs\n    switch @mget(\'angle_units\')\n      when \"rad\" then angle = -1 * @mget(\'angle\')\n      when \"deg\" then angle = -1 * @mget(\'angle\') * Math.PI/180.0\n\n    if @mget(\'x_units\') == \"data\"\n      vx = @xmapper.map_to_target(@mget(\'x\'))\n    else\n      vx = @mget(\'x\')\n    sx = @canvas.vx_to_sx(vx)\n\n    if @mget(\'y_units\') == \"data\"\n      vy = @ymapper.map_to_target(@mget(\'y\'))\n    else\n      vy = @mget(\'y\')\n    sy = @canvas.vy_to_sy(vy)\n\n    if @model.panel?\n      panel_offset = @_get_panel_offset()\n      sx += panel_offset.x\n      sy += panel_offset.y\n\n    #--- End of copied section from ``Label.render`` implementation\n\n    # ``katex`` is loaded into the global window at runtime\n    # katex.renderToString returns a html ``span`` element\n    latex = katex.renderToString(@mget(\'text\'), {displayMode: true})\n\n    # Must render as superpositioned div (not on canvas) so that KaTex\n    # css can properly style the text\n    @_css_text(ctx, latex, sx + @mget(\'x_offset\'), sy - @mget(\'y_offset\'), angle)\n\nclass LatexLabel extends Label.Model\n  type: \'LatexLabel\'\n  default_view: LatexLabelView\n\nmodule.exports =\n  Model: LatexLabel\n  View: LatexLabelView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n",
          "custom/surface3d": "\n# This file contains the JavaScript (CoffeeScript) implementation\n# for a Bokeh custom extension. The \"surface3d.py\" contains the\n# python counterpart.\n#\n# This custom model wraps one part of the third-party vis.js library:\n#\n#     http://visjs.org/index.html\n#\n# Making it easy to hook up python data analytics tools (NumPy, SciPy,\n# Pandas, etc.) to web presentations using the Bokeh server.\n\n# These \"require\" lines are similar to python \"import\" statements\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\n# This defines some default options for the Graph3d feature of vis.js\n# See: http://visjs.org/graph3d_examples.html for more details.\nOPTIONS =\n  width:  \'600px\'\n  height: \'600px\'\n  style: \'surface\'\n  showPerspective: true\n  showGrid: true\n  keepAspectRatio: true\n  verticalRatio: 1.0\n  legendLabel: \'stuff\'\n  cameraPosition:\n    horizontal: -0.35\n    vertical: 0.22\n    distance: 1.8\n\n# To create custom model extensions that will render on to the HTML canvas\n# or into the DOM, we must create a View subclass for the model. Currently\n# Bokeh models and views are based on BackBone. More information about\n# using Backbone can be found here:\n#\n#     http://backbonejs.org/\n#\n# In this case we will subclass from the existing BokehJS ``LayoutDOM.View``,\n# corresponding to our\nclass Surface3dView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    url = \"https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js\"\n    $.getScript(url).done(@_init)\n\n  # NOTE: we have to use the \"fat arrow\" => here so that \"this\" is bound correctly\n  _init: () =>\n    # Create a new Graph3s using the vis.js API. This assumes the vis.js has\n    # already been loaded (e.g. in a custom app template). In the future Bokeh\n    # models will be able to specify and load external scripts automatically.\n    #\n    # Backbone Views create <div> elements by default, accessible as @$el. Many\n    # Bokeh views ignore this default <div>, and instead do things like draw\n    # to the HTML canvas. In this case though, we use the <div> to attach a\n    # Graph3d to the DOM.\n    @_graph = new vis.Graph3d(@$el[0], @get_data(), OPTIONS)\n\n    # Set Backbone listener so that when the Bokeh data source has a change\n    # event, we can process the new data\n    @listenTo(@model.data_source, \'change\', () =>\n        @_graph.setData(@get_data())\n    )\n\n  # This is the callback executed when the Bokeh data has an change. Its basic\n  # function is to adapt the Bokeh data source to the vis.js DataSet format.\n  get_data: () ->\n    data = new vis.DataSet()\n    source = @model.data_source\n    for i in [0...source.get_length()]\n      data.add({\n        x:     source.get_column(@model.x)[i]\n        y:     source.get_column(@model.y)[i]\n        z:     source.get_column(@model.z)[i]\n        style: source.get_column(@model.color)[i]\n      })\n    return data\n\n# We must also create a corresponding JavaScript Backbone model sublcass to\n# correspond to the python Bokeh model subclass. In this case, since we want\n# an element that can position itself in the DOM according to a Bokeh layout,\n# we subclass from ``LayoutDOM.model``\nclass Surface3d extends LayoutDOM.Model\n\n  # This is usually boilerplate. In some cases there may not be a view.\n  default_view: Surface3dView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Surface3d\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. ``bokeh.core.properties.String`` will be\n  # ``p.String`` in the JS implementatin. Where the JS type system is not yet\n  # as rich, you can use ``p.Any`` as a \"wildcard\" property type.\n  @define {\n    x:           [ p.String           ]\n    y:           [ p.String           ]\n    z:           [ p.String           ]\n    color:       [ p.String           ]\n    data_source: [ p.Instance         ]\n  }\n\n# This is boilerplate. Every implementation should \"export\" a ``Model``\n# and (when applicable) also a ``View``.\nmodule.exports =\n  Model: Surface3d\n  View: Surface3dView\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"ef8132f8-87fc-47b6-9c86-496fed97b8c1":{"roots":{"references":[{"attributes":{"data_source":{"id":"f06f0829-5f0f-4c87-af6b-27722857954b","type":"ColumnDataSource"},"glyph":{"id":"b76ff353-6294-48d6-a200-e927a69c8aad","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"1893a067-ec49-4e1b-adc1-4dd464f58763","type":"Circle"},"selection_glyph":null},"id":"8b142f9b-e674-43a6-9f88-c3bc9f1e649b","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"bc408e09-71a0-4164-b190-b5275075fe8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"009a3723-a930-4fb6-83ff-d4d4785eeed8","type":"BasicTicker"}},"id":"36282b30-f74c-43a4-911a-8196bbeeacf5","type":"Grid"},{"attributes":{"plot":{"id":"bc408e09-71a0-4164-b190-b5275075fe8e","subtype":"Figure","type":"Plot"}},"id":"d9be20dc-1a40-4837-b477-3bf0befd0681","type":"PanTool"},{"attributes":{},"id":"38024180-a967-4a1e-b232-701884782e36","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1893a067-ec49-4e1b-adc1-4dd464f58763","type":"Circle"},{"attributes":{"plot":{"id":"bc408e09-71a0-4164-b190-b5275075fe8e","subtype":"Figure","type":"Plot"}},"id":"3b19135d-599b-4fbd-b667-2cb890d949f7","type":"HelpTool"},{"attributes":{"plot":{"id":"bc408e09-71a0-4164-b190-b5275075fe8e","subtype":"Figure","type":"Plot"}},"id":"fc9167a5-0ea6-4ddf-9e6e-640479319f80","type":"SaveTool"},{"attributes":{},"id":"bad25aca-1192-4f5e-b24e-e9a76fae1168","type":"BasicTickFormatter"},{"attributes":{},"id":"f4d47b90-7291-4faf-b36a-5f58809bb18d","type":"BasicTicker"},{"attributes":{"below":[{"id":"e2e6155f-c8ab-4c3d-94a8-a201742340a9","type":"LinearAxis"}],"left":[{"id":"bb9b9aa3-e20a-41ab-9946-814db3f7b26d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e2e6155f-c8ab-4c3d-94a8-a201742340a9","type":"LinearAxis"},{"id":"7729c7b8-75ff-416f-8aab-b41246a28c74","type":"Grid"},{"id":"bb9b9aa3-e20a-41ab-9946-814db3f7b26d","type":"LinearAxis"},{"id":"36282b30-f74c-43a4-911a-8196bbeeacf5","type":"Grid"},{"id":"bfc8d89b-7227-4cbf-a513-e13c50b214ca","type":"BoxAnnotation"},{"id":"8b142f9b-e674-43a6-9f88-c3bc9f1e649b","type":"GlyphRenderer"}],"title":{"id":"e169a4b8-846e-44b1-99d4-3b60e7c575d3","type":"Title"},"tool_events":{"id":"38024180-a967-4a1e-b232-701884782e36","type":"ToolEvents"},"toolbar":{"id":"91dd06dd-6498-4de3-9f78-21e88517dd08","type":"Toolbar"},"x_range":{"id":"671f41ed-e82b-471d-b060-25369cfc43d0","type":"DataRange1d"},"y_range":{"id":"4bc639ec-fb0d-4dc7-9b50-f2cb0ad42377","type":"DataRange1d"}},"id":"bc408e09-71a0-4164-b190-b5275075fe8e","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d9be20dc-1a40-4837-b477-3bf0befd0681","type":"PanTool"},{"id":"1f9a6d85-5d22-4031-9871-2ced9257b123","type":"WheelZoomTool"},{"id":"add0f81a-0181-41d0-b079-d8c00d4b10d3","type":"BoxZoomTool"},{"id":"fc9167a5-0ea6-4ddf-9e6e-640479319f80","type":"SaveTool"},{"id":"e9263d20-e920-47e1-89a7-07fd54dc7166","type":"ResetTool"},{"id":"3b19135d-599b-4fbd-b667-2cb890d949f7","type":"HelpTool"}]},"id":"91dd06dd-6498-4de3-9f78-21e88517dd08","type":"Toolbar"},{"attributes":{"plot":{"id":"bc408e09-71a0-4164-b190-b5275075fe8e","subtype":"Figure","type":"Plot"}},"id":"e9263d20-e920-47e1-89a7-07fd54dc7166","type":"ResetTool"},{"attributes":{"formatter":{"id":"694243f5-f92b-428a-9929-85eb155a0bc5","type":"BasicTickFormatter"},"plot":{"id":"bc408e09-71a0-4164-b190-b5275075fe8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"009a3723-a930-4fb6-83ff-d4d4785eeed8","type":"BasicTicker"}},"id":"bb9b9aa3-e20a-41ab-9946-814db3f7b26d","type":"LinearAxis"},{"attributes":{"formatter":{"id":"bad25aca-1192-4f5e-b24e-e9a76fae1168","type":"BasicTickFormatter"},"plot":{"id":"bc408e09-71a0-4164-b190-b5275075fe8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4d47b90-7291-4faf-b36a-5f58809bb18d","type":"BasicTicker"}},"id":"e2e6155f-c8ab-4c3d-94a8-a201742340a9","type":"LinearAxis"},{"attributes":{"overlay":{"id":"bfc8d89b-7227-4cbf-a513-e13c50b214ca","type":"BoxAnnotation"},"plot":{"id":"bc408e09-71a0-4164-b190-b5275075fe8e","subtype":"Figure","type":"Plot"}},"id":"add0f81a-0181-41d0-b079-d8c00d4b10d3","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"671f41ed-e82b-471d-b060-25369cfc43d0","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b76ff353-6294-48d6-a200-e927a69c8aad","type":"Circle"},{"attributes":{},"id":"009a3723-a930-4fb6-83ff-d4d4785eeed8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4bc639ec-fb0d-4dc7-9b50-f2cb0ad42377","type":"DataRange1d"},{"attributes":{"plot":{"id":"bc408e09-71a0-4164-b190-b5275075fe8e","subtype":"Figure","type":"Plot"}},"id":"1f9a6d85-5d22-4031-9871-2ced9257b123","type":"WheelZoomTool"},{"attributes":{},"id":"694243f5-f92b-428a-9929-85eb155a0bc5","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"e169a4b8-846e-44b1-99d4-3b60e7c575d3","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bfc8d89b-7227-4cbf-a513-e13c50b214ca","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"bc408e09-71a0-4164-b190-b5275075fe8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4d47b90-7291-4faf-b36a-5f58809bb18d","type":"BasicTicker"}},"id":"7729c7b8-75ff-416f-8aab-b41246a28c74","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"f06f0829-5f0f-4c87-af6b-27722857954b","type":"ColumnDataSource"}],"root_ids":["bc408e09-71a0-4164-b190-b5275075fe8e"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"ef8132f8-87fc-47b6-9c86-496fed97b8c1","elementid":"b9cea5d9-2407-4015-96ee-343136622749","modelid":"bc408e09-71a0-4164-b190-b5275075fe8e"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
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