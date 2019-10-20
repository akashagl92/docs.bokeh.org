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
      };var element = document.getElementById("822cb219-44f3-4f2c-9e3c-dc0df664e1b9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '822cb219-44f3-4f2c-9e3c-dc0df664e1b9' but no matching script tag was found. ")
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
                  var docs_json = {"997fecd0-ec85-4a02-a296-162d974b4549":{"roots":{"references":[{"attributes":{"callback":null},"id":"e953f48d-a6b3-4baa-81d4-2df2513551da","type":"DataRange1d"},{"attributes":{},"id":"14abf7f5-560d-4dc3-823b-99d7e6bb717b","type":"BasicTicker"},{"attributes":{},"id":"ec3f139f-ac7e-40d7-a985-abdb6fbd2fb3","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"f85a1158-b8a4-4900-8c64-dee5d737a7a1","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b29ec450-bde5-435c-a85e-36643df539c9","subtype":"Figure","type":"Plot"}},"id":"acbbd1b0-0d90-4665-b4a5-c4551ac608eb","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c932c995-bf3f-48ab-a165-6d7784d19516","type":"Circle"},{"attributes":{"data_source":{"id":"f85a1158-b8a4-4900-8c64-dee5d737a7a1","type":"ColumnDataSource"},"glyph":{"id":"c932c995-bf3f-48ab-a165-6d7784d19516","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a91a609b-f767-405d-976a-e5badd03df75","type":"Circle"},"selection_glyph":null},"id":"9108392e-0c35-48bc-ac39-79a420244a2c","type":"GlyphRenderer"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"38c4fde2-f555-4971-97b6-28b3aa40fbd1","type":"BasicTickFormatter"},"plot":{"id":"b29ec450-bde5-435c-a85e-36643df539c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"14abf7f5-560d-4dc3-823b-99d7e6bb717b","type":"BasicTicker"}},"id":"9e4edb63-d779-45f5-bd0e-f2cbcadcceb3","type":"LinearAxis"},{"attributes":{"plot":{"id":"b29ec450-bde5-435c-a85e-36643df539c9","subtype":"Figure","type":"Plot"}},"id":"1bc0b60a-3fa2-451b-9568-583a340663ce","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"b29ec450-bde5-435c-a85e-36643df539c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"14abf7f5-560d-4dc3-823b-99d7e6bb717b","type":"BasicTicker"}},"id":"8ce8c856-93e5-4ac3-8afc-b777603124b3","type":"Grid"},{"attributes":{"callback":null},"id":"d7e37916-68f4-481e-a0d5-1d316edffba3","type":"DataRange1d"},{"attributes":{"plot":{"id":"b29ec450-bde5-435c-a85e-36643df539c9","subtype":"Figure","type":"Plot"}},"id":"8528160c-81b2-4dc6-8904-472e7c2c7b0d","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f5b8f160-c2ec-459b-8ff2-1f3b51a047cb","type":"PanTool"},{"id":"1bc0b60a-3fa2-451b-9568-583a340663ce","type":"WheelZoomTool"},{"id":"22d17630-6485-46a9-b232-07f30cfbb6f2","type":"BoxZoomTool"},{"id":"8528160c-81b2-4dc6-8904-472e7c2c7b0d","type":"SaveTool"},{"id":"acbbd1b0-0d90-4665-b4a5-c4551ac608eb","type":"ResetTool"},{"id":"16627154-68d2-4a7c-8d0f-95ac63b407cb","type":"HelpTool"}]},"id":"e5ce037c-e8ca-4e08-98f4-8903f86d3b9f","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"b29ec450-bde5-435c-a85e-36643df539c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d84df6c-09c9-41ff-84a2-7ba678d48ed1","type":"BasicTicker"}},"id":"d3b9df2a-5c14-429f-8d92-c9bff3a3dbe7","type":"Grid"},{"attributes":{"below":[{"id":"9e4edb63-d779-45f5-bd0e-f2cbcadcceb3","type":"LinearAxis"}],"left":[{"id":"1091237d-fd3e-4866-819d-d2052390e373","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9e4edb63-d779-45f5-bd0e-f2cbcadcceb3","type":"LinearAxis"},{"id":"8ce8c856-93e5-4ac3-8afc-b777603124b3","type":"Grid"},{"id":"1091237d-fd3e-4866-819d-d2052390e373","type":"LinearAxis"},{"id":"d3b9df2a-5c14-429f-8d92-c9bff3a3dbe7","type":"Grid"},{"id":"5e336157-4da2-4c21-bdb2-8a152a21aa44","type":"BoxAnnotation"},{"id":"9108392e-0c35-48bc-ac39-79a420244a2c","type":"GlyphRenderer"}],"title":{"id":"74b8480b-37e0-425c-a7b5-725df265cb59","type":"Title"},"tool_events":{"id":"db3d8581-0207-4c28-8eab-20511d53dd41","type":"ToolEvents"},"toolbar":{"id":"e5ce037c-e8ca-4e08-98f4-8903f86d3b9f","type":"Toolbar"},"x_range":{"id":"d7e37916-68f4-481e-a0d5-1d316edffba3","type":"DataRange1d"},"y_range":{"id":"e953f48d-a6b3-4baa-81d4-2df2513551da","type":"DataRange1d"}},"id":"b29ec450-bde5-435c-a85e-36643df539c9","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3d84df6c-09c9-41ff-84a2-7ba678d48ed1","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a91a609b-f767-405d-976a-e5badd03df75","type":"Circle"},{"attributes":{"axis_label":"Bin Count","formatter":{"id":"ec3f139f-ac7e-40d7-a985-abdb6fbd2fb3","type":"BasicTickFormatter"},"plot":{"id":"b29ec450-bde5-435c-a85e-36643df539c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d84df6c-09c9-41ff-84a2-7ba678d48ed1","type":"BasicTicker"}},"id":"1091237d-fd3e-4866-819d-d2052390e373","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5e336157-4da2-4c21-bdb2-8a152a21aa44","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"5e336157-4da2-4c21-bdb2-8a152a21aa44","type":"BoxAnnotation"},"plot":{"id":"b29ec450-bde5-435c-a85e-36643df539c9","subtype":"Figure","type":"Plot"}},"id":"22d17630-6485-46a9-b232-07f30cfbb6f2","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"b29ec450-bde5-435c-a85e-36643df539c9","subtype":"Figure","type":"Plot"}},"id":"16627154-68d2-4a7c-8d0f-95ac63b407cb","type":"HelpTool"},{"attributes":{"plot":{"id":"b29ec450-bde5-435c-a85e-36643df539c9","subtype":"Figure","type":"Plot"}},"id":"f5b8f160-c2ec-459b-8ff2-1f3b51a047cb","type":"PanTool"},{"attributes":{},"id":"db3d8581-0207-4c28-8eab-20511d53dd41","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"74b8480b-37e0-425c-a7b5-725df265cb59","type":"Title"},{"attributes":{},"id":"38c4fde2-f555-4971-97b6-28b3aa40fbd1","type":"BasicTickFormatter"}],"root_ids":["b29ec450-bde5-435c-a85e-36643df539c9"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"997fecd0-ec85-4a02-a296-162d974b4549","elementid":"822cb219-44f3-4f2c-9e3c-dc0df664e1b9","modelid":"b29ec450-bde5-435c-a85e-36643df539c9"}];
                  
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