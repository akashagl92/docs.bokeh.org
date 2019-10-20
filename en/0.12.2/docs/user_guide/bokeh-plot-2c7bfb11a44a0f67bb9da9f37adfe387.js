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
      };var element = document.getElementById("ec6b76fd-12af-43d8-a43f-49c0dd93beff");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ec6b76fd-12af-43d8-a43f-49c0dd93beff' but no matching script tag was found. ")
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
                  var docs_json = {"3c6829f6-6b7f-4e46-a6b6-8e206d5f97cb":{"roots":{"references":[{"attributes":{"plot":{"id":"c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1","subtype":"Figure","type":"Plot"}},"id":"19301d0b-f8b6-4926-b6ec-0a051e0b093a","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"9fbf56e0-50eb-4145-9f28-e3cc691c685b","type":"BoxAnnotation"},"plot":{"id":"c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1","subtype":"Figure","type":"Plot"}},"id":"6c315215-794d-4004-959f-0d95ce8b8cca","type":"BoxZoomTool"},{"attributes":{},"id":"7a4be314-3c86-4c62-81a8-b09538fc652b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"dd53e3cf-d8d6-4f45-8b7a-2152fc43fe60","type":"PrintfTickFormatter"},"plot":{"id":"c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a4be314-3c86-4c62-81a8-b09538fc652b","type":"BasicTicker"}},"id":"d49b9884-2158-48f7-af2f-ee44af3d2609","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"5619d62f-a73d-4d88-8cba-3562d2641455","type":"Title"},{"attributes":{"callback":null},"id":"ac75afc0-6149-4276-a4c8-b64e97be8917","type":"DataRange1d"},{"attributes":{"data_source":{"id":"e058c644-518f-49ff-8d48-ce646615bc28","type":"ColumnDataSource"},"glyph":{"id":"a2c449eb-0947-4b8c-9423-28c8885a9323","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"f36587dc-55ef-4caa-b9e4-692bc01a8121","type":"Circle"},"selection_glyph":null},"id":"711d4fc4-e88e-4488-9f7a-da71093bb67a","type":"GlyphRenderer"},{"attributes":{},"id":"a7098921-243d-4e8e-85d8-d5d82dc7f9d8","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a2c449eb-0947-4b8c-9423-28c8885a9323","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f36587dc-55ef-4caa-b9e4-692bc01a8121","type":"Circle"},{"attributes":{"plot":{"id":"c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e59a465c-9b06-48fc-b346-d1d3754c5cc5","type":"BasicTicker"}},"id":"c780fc87-0432-4e98-957b-d358b8455db0","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9fbf56e0-50eb-4145-9f28-e3cc691c685b","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a4be314-3c86-4c62-81a8-b09538fc652b","type":"BasicTicker"}},"id":"e6cb6ee1-cbcc-4ebf-9cbd-5a89b1ee239d","type":"Grid"},{"attributes":{"format":"%5.3f mu"},"id":"dd53e3cf-d8d6-4f45-8b7a-2152fc43fe60","type":"PrintfTickFormatter"},{"attributes":{},"id":"e59a465c-9b06-48fc-b346-d1d3754c5cc5","type":"BasicTicker"},{"attributes":{"format":"%4.1e"},"id":"6894c390-8740-4bee-aada-e8d2ee4abe15","type":"PrintfTickFormatter"},{"attributes":{"plot":{"id":"c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1","subtype":"Figure","type":"Plot"}},"id":"91de611f-9de7-40cd-8d48-b473656f343f","type":"SaveTool"},{"attributes":{"callback":null},"id":"c5176cb3-c09f-4d2e-b127-4d6b3981553c","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"e058c644-518f-49ff-8d48-ce646615bc28","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1","subtype":"Figure","type":"Plot"}},"id":"549c18d3-5157-4a8e-a645-0eca94c21192","type":"PanTool"},{"attributes":{"formatter":{"id":"6894c390-8740-4bee-aada-e8d2ee4abe15","type":"PrintfTickFormatter"},"plot":{"id":"c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e59a465c-9b06-48fc-b346-d1d3754c5cc5","type":"BasicTicker"}},"id":"b5bc92b1-eef7-41d3-ac0a-c1b9d03e2033","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"549c18d3-5157-4a8e-a645-0eca94c21192","type":"PanTool"},{"id":"19301d0b-f8b6-4926-b6ec-0a051e0b093a","type":"WheelZoomTool"},{"id":"6c315215-794d-4004-959f-0d95ce8b8cca","type":"BoxZoomTool"},{"id":"91de611f-9de7-40cd-8d48-b473656f343f","type":"SaveTool"},{"id":"a768a6ba-ffb3-44e8-be19-680cfc427574","type":"ResetTool"},{"id":"53ece69c-94ba-47d6-86bb-35f39429da41","type":"HelpTool"}]},"id":"67eeb4a9-9272-447b-b864-4abd843639eb","type":"Toolbar"},{"attributes":{"plot":{"id":"c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1","subtype":"Figure","type":"Plot"}},"id":"a768a6ba-ffb3-44e8-be19-680cfc427574","type":"ResetTool"},{"attributes":{"below":[{"id":"b5bc92b1-eef7-41d3-ac0a-c1b9d03e2033","type":"LinearAxis"}],"left":[{"id":"d49b9884-2158-48f7-af2f-ee44af3d2609","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b5bc92b1-eef7-41d3-ac0a-c1b9d03e2033","type":"LinearAxis"},{"id":"c780fc87-0432-4e98-957b-d358b8455db0","type":"Grid"},{"id":"d49b9884-2158-48f7-af2f-ee44af3d2609","type":"LinearAxis"},{"id":"e6cb6ee1-cbcc-4ebf-9cbd-5a89b1ee239d","type":"Grid"},{"id":"9fbf56e0-50eb-4145-9f28-e3cc691c685b","type":"BoxAnnotation"},{"id":"711d4fc4-e88e-4488-9f7a-da71093bb67a","type":"GlyphRenderer"}],"title":{"id":"5619d62f-a73d-4d88-8cba-3562d2641455","type":"Title"},"tool_events":{"id":"a7098921-243d-4e8e-85d8-d5d82dc7f9d8","type":"ToolEvents"},"toolbar":{"id":"67eeb4a9-9272-447b-b864-4abd843639eb","type":"Toolbar"},"x_range":{"id":"ac75afc0-6149-4276-a4c8-b64e97be8917","type":"DataRange1d"},"y_range":{"id":"c5176cb3-c09f-4d2e-b127-4d6b3981553c","type":"DataRange1d"}},"id":"c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1","subtype":"Figure","type":"Plot"}},"id":"53ece69c-94ba-47d6-86bb-35f39429da41","type":"HelpTool"}],"root_ids":["c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"3c6829f6-6b7f-4e46-a6b6-8e206d5f97cb","elementid":"ec6b76fd-12af-43d8-a43f-49c0dd93beff","modelid":"c7aeb1d0-aa43-4e14-aac5-63e920a5d9f1"}];
                  
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