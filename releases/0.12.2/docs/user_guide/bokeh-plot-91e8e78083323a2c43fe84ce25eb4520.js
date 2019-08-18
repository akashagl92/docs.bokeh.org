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
      };var element = document.getElementById("5b90acae-f5df-4ce8-a218-4f9aba10c905");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5b90acae-f5df-4ce8-a218-4f9aba10c905' but no matching script tag was found. ")
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
                  var docs_json = {"2d08ea13-f518-44bc-8077-f40b735efa4c":{"roots":{"references":[{"attributes":{"plot":{"id":"b8e7de32-2f28-4c7f-9e1c-844e64229693","subtype":"Figure","type":"Plot"}},"id":"d6c84916-13f6-4139-a732-152d29d4fdc7","type":"PanTool"},{"attributes":{"plot":null,"text":null},"id":"f065dfde-baff-4272-990e-3423dff038e8","type":"Title"},{"attributes":{},"id":"1aa4cb23-6a29-4bdd-b3a4-8778e39049e5","type":"BasicTicker"},{"attributes":{"plot":{"id":"b8e7de32-2f28-4c7f-9e1c-844e64229693","subtype":"Figure","type":"Plot"}},"id":"4bd1085e-aea6-4c72-b7f0-fb10b6a9c1b4","type":"HelpTool"},{"attributes":{"plot":{"id":"b8e7de32-2f28-4c7f-9e1c-844e64229693","subtype":"Figure","type":"Plot"}},"id":"11674857-d2b2-4670-975e-c2e573ce05af","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"7e84176f-2e98-40b9-9c50-e73efcd90463","type":"BasicTickFormatter"},"plot":{"id":"b8e7de32-2f28-4c7f-9e1c-844e64229693","subtype":"Figure","type":"Plot"},"ticker":{"id":"391dba7b-eaef-4aed-9cff-7cad090190da","type":"BasicTicker"}},"id":"137e3b8c-7f2b-44cd-9cd9-89bfda475400","type":"LinearAxis"},{"attributes":{"plot":{"id":"b8e7de32-2f28-4c7f-9e1c-844e64229693","subtype":"Figure","type":"Plot"}},"id":"448d6ec2-0773-49b8-9bb9-0454f0f74c44","type":"ResetTool"},{"attributes":{},"id":"78182d73-d060-40a3-81bc-466eeaf323e3","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"b8e7de32-2f28-4c7f-9e1c-844e64229693","subtype":"Figure","type":"Plot"},"ticker":{"id":"1aa4cb23-6a29-4bdd-b3a4-8778e39049e5","type":"BasicTicker"}},"id":"3aadd8e5-f35e-4927-85d6-95ce0bb9fbe7","type":"Grid"},{"attributes":{"plot":{"id":"b8e7de32-2f28-4c7f-9e1c-844e64229693","subtype":"Figure","type":"Plot"},"ticker":{"id":"391dba7b-eaef-4aed-9cff-7cad090190da","type":"BasicTicker"}},"id":"0df36bc6-cd84-4dbc-aad1-9842d4fc4042","type":"Grid"},{"attributes":{},"id":"ec9d83f7-c47b-4fbe-b8b9-aab540cd2ec4","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d6c84916-13f6-4139-a732-152d29d4fdc7","type":"PanTool"},{"id":"11674857-d2b2-4670-975e-c2e573ce05af","type":"WheelZoomTool"},{"id":"5cb42b21-fe9e-4987-90b7-935939efc58d","type":"BoxZoomTool"},{"id":"5f816a77-cf41-4234-a517-05f405258cc2","type":"SaveTool"},{"id":"448d6ec2-0773-49b8-9bb9-0454f0f74c44","type":"ResetTool"},{"id":"4bd1085e-aea6-4c72-b7f0-fb10b6a9c1b4","type":"HelpTool"}]},"id":"5a255e1f-b591-43c6-aec1-31ab3c2e87a1","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e5188b9b-8c61-4880-81fd-041b25567969","type":"Circle"},{"attributes":{"plot":{"id":"b8e7de32-2f28-4c7f-9e1c-844e64229693","subtype":"Figure","type":"Plot"}},"id":"5f816a77-cf41-4234-a517-05f405258cc2","type":"SaveTool"},{"attributes":{"formatter":{"id":"ec9d83f7-c47b-4fbe-b8b9-aab540cd2ec4","type":"BasicTickFormatter"},"plot":{"id":"b8e7de32-2f28-4c7f-9e1c-844e64229693","subtype":"Figure","type":"Plot"},"ticker":{"id":"1aa4cb23-6a29-4bdd-b3a4-8778e39049e5","type":"BasicTicker"}},"id":"ae02c474-eac9-4065-b116-63217741f410","type":"LinearAxis"},{"attributes":{"callback":null,"end":20},"id":"8f7cab2d-432c-4ed8-9d3d-50862ca450a4","type":"Range1d"},{"attributes":{},"id":"7e84176f-2e98-40b9-9c50-e73efcd90463","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b3277d6d-935b-4bf0-be63-cb373eb91d07","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"1c7e86f6-244c-474a-aa5c-bea4c93dc828","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ebcb93ab-f50b-40a9-8127-818e102ddf3d","type":"Circle"},{"attributes":{"overlay":{"id":"b3277d6d-935b-4bf0-be63-cb373eb91d07","type":"BoxAnnotation"},"plot":{"id":"b8e7de32-2f28-4c7f-9e1c-844e64229693","subtype":"Figure","type":"Plot"}},"id":"5cb42b21-fe9e-4987-90b7-935939efc58d","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"137e3b8c-7f2b-44cd-9cd9-89bfda475400","type":"LinearAxis"}],"left":[{"id":"ae02c474-eac9-4065-b116-63217741f410","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"137e3b8c-7f2b-44cd-9cd9-89bfda475400","type":"LinearAxis"},{"id":"0df36bc6-cd84-4dbc-aad1-9842d4fc4042","type":"Grid"},{"id":"ae02c474-eac9-4065-b116-63217741f410","type":"LinearAxis"},{"id":"3aadd8e5-f35e-4927-85d6-95ce0bb9fbe7","type":"Grid"},{"id":"b3277d6d-935b-4bf0-be63-cb373eb91d07","type":"BoxAnnotation"},{"id":"fa869e63-ac45-440f-93ac-8cd9f1b83ec0","type":"GlyphRenderer"}],"title":{"id":"f065dfde-baff-4272-990e-3423dff038e8","type":"Title"},"tool_events":{"id":"78182d73-d060-40a3-81bc-466eeaf323e3","type":"ToolEvents"},"toolbar":{"id":"5a255e1f-b591-43c6-aec1-31ab3c2e87a1","type":"Toolbar"},"x_range":{"id":"8f7cab2d-432c-4ed8-9d3d-50862ca450a4","type":"Range1d"},"y_range":{"id":"4e2a88a5-d8bd-425b-9b48-0a9fdc289372","type":"Range1d"}},"id":"b8e7de32-2f28-4c7f-9e1c-844e64229693","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"391dba7b-eaef-4aed-9cff-7cad090190da","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1c7e86f6-244c-474a-aa5c-bea4c93dc828","type":"ColumnDataSource"},"glyph":{"id":"ebcb93ab-f50b-40a9-8127-818e102ddf3d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"e5188b9b-8c61-4880-81fd-041b25567969","type":"Circle"},"selection_glyph":null},"id":"fa869e63-ac45-440f-93ac-8cd9f1b83ec0","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":15},"id":"4e2a88a5-d8bd-425b-9b48-0a9fdc289372","type":"Range1d"}],"root_ids":["b8e7de32-2f28-4c7f-9e1c-844e64229693"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"2d08ea13-f518-44bc-8077-f40b735efa4c","elementid":"5b90acae-f5df-4ce8-a218-4f9aba10c905","modelid":"b8e7de32-2f28-4c7f-9e1c-844e64229693"}];
                  
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