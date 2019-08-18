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
      };var element = document.getElementById("475f022b-31ce-44cd-aa59-308c1e70fba6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '475f022b-31ce-44cd-aa59-308c1e70fba6' but no matching script tag was found. ")
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
                  var docs_json = {"652db40d-a7bc-4e04-a97f-af5a3e13fbc8":{"roots":{"references":[{"attributes":{"data_source":{"id":"356ef34c-4d76-49ab-bcfb-7731579c95db","type":"ColumnDataSource"},"glyph":{"id":"f61e9d63-8898-4e30-8a28-68711161205a","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":{"id":"30184d24-f7af-4d7f-84cc-34871dcc27f0","type":"MultiLine"},"selection_glyph":null},"id":"5ce8cc9c-8f1b-4842-959f-5d0990a354fe","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"a4465cfc-ba90-43de-b893-691ddd9fcdba","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"0a140d36-cece-47d3-ab8c-b322e8b7f1f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f948413c-3b64-4b5c-b0b1-8119ae9114c1","type":"BasicTicker"}},"id":"c6cd871f-74f5-4e4e-a40d-3d656f5cf320","type":"Grid"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"f61e9d63-8898-4e30-8a28-68711161205a","type":"MultiLine"},{"attributes":{"overlay":{"id":"92224761-2a50-40a4-911c-07351ac59393","type":"BoxAnnotation"},"plot":{"id":"0a140d36-cece-47d3-ab8c-b322e8b7f1f3","subtype":"Figure","type":"Plot"}},"id":"08f909b6-b4e6-4adf-a2fb-58b394f43f7f","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"92224761-2a50-40a4-911c-07351ac59393","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"0a140d36-cece-47d3-ab8c-b322e8b7f1f3","subtype":"Figure","type":"Plot"}},"id":"c3a931da-9511-431e-8344-90061c38b5ee","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["ys","xs","line_color","line_alpha"],"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"356ef34c-4d76-49ab-bcfb-7731579c95db","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0a140d36-cece-47d3-ab8c-b322e8b7f1f3","subtype":"Figure","type":"Plot"}},"id":"c851020c-a0bb-4076-ac6c-1c1533a9d00b","type":"PanTool"},{"attributes":{"plot":{"id":"0a140d36-cece-47d3-ab8c-b322e8b7f1f3","subtype":"Figure","type":"Plot"}},"id":"f4f81401-7633-4a63-942b-96adad8ca575","type":"HelpTool"},{"attributes":{"callback":null},"id":"f916303b-4bc1-4968-8ce7-e069833a3bdc","type":"DataRange1d"},{"attributes":{"plot":{"id":"0a140d36-cece-47d3-ab8c-b322e8b7f1f3","subtype":"Figure","type":"Plot"}},"id":"70a432dc-46e9-4ae2-9b50-28c4e423a2b0","type":"SaveTool"},{"attributes":{"plot":{"id":"0a140d36-cece-47d3-ab8c-b322e8b7f1f3","subtype":"Figure","type":"Plot"}},"id":"f31393e6-5e2b-4032-9089-80336712df77","type":"ResetTool"},{"attributes":{},"id":"8ac37f2a-26b8-42f7-8316-307c3f820ed6","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"22530653-5f50-4ec1-93b6-0460bd879c29","type":"DataRange1d"},{"attributes":{},"id":"f948413c-3b64-4b5c-b0b1-8119ae9114c1","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c851020c-a0bb-4076-ac6c-1c1533a9d00b","type":"PanTool"},{"id":"c3a931da-9511-431e-8344-90061c38b5ee","type":"WheelZoomTool"},{"id":"08f909b6-b4e6-4adf-a2fb-58b394f43f7f","type":"BoxZoomTool"},{"id":"70a432dc-46e9-4ae2-9b50-28c4e423a2b0","type":"SaveTool"},{"id":"f31393e6-5e2b-4032-9089-80336712df77","type":"ResetTool"},{"id":"f4f81401-7633-4a63-942b-96adad8ca575","type":"HelpTool"}]},"id":"781a8c10-289f-43a4-9a91-de34a60ff9f9","type":"Toolbar"},{"attributes":{"formatter":{"id":"8ac37f2a-26b8-42f7-8316-307c3f820ed6","type":"BasicTickFormatter"},"plot":{"id":"0a140d36-cece-47d3-ab8c-b322e8b7f1f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f948413c-3b64-4b5c-b0b1-8119ae9114c1","type":"BasicTicker"}},"id":"1507caae-a16b-4135-b06b-ef1317c3a352","type":"LinearAxis"},{"attributes":{},"id":"3901ee7f-f635-4043-b58c-2fcac98fbece","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"30184d24-f7af-4d7f-84cc-34871dcc27f0","type":"MultiLine"},{"attributes":{},"id":"794f3203-8fe4-40c8-be8f-e38318c3a6aa","type":"ToolEvents"},{"attributes":{},"id":"7a26eb65-1247-4dad-b583-cf6611a79276","type":"BasicTicker"},{"attributes":{"below":[{"id":"6c1d8b32-6cad-45ca-b0cb-bce674f8d1f2","type":"LinearAxis"}],"left":[{"id":"1507caae-a16b-4135-b06b-ef1317c3a352","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6c1d8b32-6cad-45ca-b0cb-bce674f8d1f2","type":"LinearAxis"},{"id":"9de259eb-1aae-418e-9805-28999646244f","type":"Grid"},{"id":"1507caae-a16b-4135-b06b-ef1317c3a352","type":"LinearAxis"},{"id":"c6cd871f-74f5-4e4e-a40d-3d656f5cf320","type":"Grid"},{"id":"92224761-2a50-40a4-911c-07351ac59393","type":"BoxAnnotation"},{"id":"5ce8cc9c-8f1b-4842-959f-5d0990a354fe","type":"GlyphRenderer"}],"title":{"id":"a4465cfc-ba90-43de-b893-691ddd9fcdba","type":"Title"},"tool_events":{"id":"794f3203-8fe4-40c8-be8f-e38318c3a6aa","type":"ToolEvents"},"toolbar":{"id":"781a8c10-289f-43a4-9a91-de34a60ff9f9","type":"Toolbar"},"x_range":{"id":"f916303b-4bc1-4968-8ce7-e069833a3bdc","type":"DataRange1d"},"y_range":{"id":"22530653-5f50-4ec1-93b6-0460bd879c29","type":"DataRange1d"}},"id":"0a140d36-cece-47d3-ab8c-b322e8b7f1f3","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"0a140d36-cece-47d3-ab8c-b322e8b7f1f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a26eb65-1247-4dad-b583-cf6611a79276","type":"BasicTicker"}},"id":"9de259eb-1aae-418e-9805-28999646244f","type":"Grid"},{"attributes":{"formatter":{"id":"3901ee7f-f635-4043-b58c-2fcac98fbece","type":"BasicTickFormatter"},"plot":{"id":"0a140d36-cece-47d3-ab8c-b322e8b7f1f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a26eb65-1247-4dad-b583-cf6611a79276","type":"BasicTicker"}},"id":"6c1d8b32-6cad-45ca-b0cb-bce674f8d1f2","type":"LinearAxis"}],"root_ids":["0a140d36-cece-47d3-ab8c-b322e8b7f1f3"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"652db40d-a7bc-4e04-a97f-af5a3e13fbc8","elementid":"475f022b-31ce-44cd-aa59-308c1e70fba6","modelid":"0a140d36-cece-47d3-ab8c-b322e8b7f1f3"}];
                  
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