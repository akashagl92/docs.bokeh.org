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
      };var element = document.getElementById("2896db42-7ade-4468-9c57-213693b99299");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2896db42-7ade-4468-9c57-213693b99299' but no matching script tag was found. ")
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
          MyFormatter: require("custom/my_formatter") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/draw_tool": "\np = require \"core/properties\"\nGestureTool = require \"models/tools/gestures/gesture_tool\"\n\nclass DrawToolView extends GestureTool.View\n\n  # this is executed when the pan/drag event starts\n  _pan_start: (e) ->\n    @model.source.data = {x: [], y: []}\n\n  # this is executed on subsequent mouse/touch moves\n  _pan: (e) ->\n    frame = @plot_model.frame\n    canvas = @plot_view.canvas\n\n    vx = canvas.sx_to_vx(e.bokeh.sx)\n    vy = canvas.sy_to_vy(e.bokeh.sy)\n    if not frame.contains(vx, vy)\n      return null\n\n    x = frame.get(\'x_mappers\').default.map_from_target(vx)\n    y = frame.get(\'y_mappers\').default.map_from_target(vy)\n\n    @model.source.data.x.push(x)\n    @model.source.data.y.push(y)\n    @model.source.trigger(\'change\')\n\n  # this is executed then the pan/drag ends\n  _pan_end: (e) -> return null\n\nclass DrawTool extends GestureTool.Model\n  default_view: DrawToolView\n  type: \"DrawTool\"\n\n  tool_name: \"Drag Span\"\n  icon: \"bk-tool-icon-lasso-select\"\n  event_type: \"pan\"\n  default_order: 12\n\n  @define { source: [ p.Instance ] }\n\nmodule.exports =\n  Model: DrawTool\n  View: DrawToolView\n",
          "custom/latex_label": "\nLabel = require \"models/annotations/label\"\n\nclass LatexLabelView extends Label.View\n  render: () ->\n\n    #--- Start of copied section from ``Label.render`` implementation\n\n    ctx = @plot_view.canvas_view.ctx\n\n    # Here because AngleSpec does units tranform and label doesn\'t support specs\n    switch @mget(\'angle_units\')\n      when \"rad\" then angle = -1 * @mget(\'angle\')\n      when \"deg\" then angle = -1 * @mget(\'angle\') * Math.PI/180.0\n\n    if @mget(\'x_units\') == \"data\"\n      vx = @xmapper.map_to_target(@mget(\'x\'))\n    else\n      vx = @mget(\'x\')\n    sx = @canvas.vx_to_sx(vx)\n\n    if @mget(\'y_units\') == \"data\"\n      vy = @ymapper.map_to_target(@mget(\'y\'))\n    else\n      vy = @mget(\'y\')\n    sy = @canvas.vy_to_sy(vy)\n\n    if @model.panel?\n      panel_offset = @_get_panel_offset()\n      sx += panel_offset.x\n      sy += panel_offset.y\n\n    #--- End of copied section from ``Label.render`` implementation\n\n    # ``katex`` is loaded into the global window at runtime\n    # katex.renderToString returns a html ``span`` element\n    latex = katex.renderToString(@mget(\'text\'), {displayMode: true})\n\n    # Must render as superpositioned div (not on canvas) so that KaTex\n    # css can properly style the text\n    @_css_text(ctx, latex, sx + @mget(\'x_offset\'), sy - @mget(\'y_offset\'), angle)\n\nclass LatexLabel extends Label.Model\n  type: \'LatexLabel\'\n  default_view: LatexLabelView\n\nmodule.exports =\n  Model: LatexLabel\n  View: LatexLabelView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"0d4004eb-ab38-4819-b81b-f08380fd8780":{"roots":{"references":[{"attributes":{},"id":"24eb131f-e11c-4556-89c2-549da3e782df","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"d62d3e91-fa76-426f-b7e9-cd205d10954a","type":"Title"},{"attributes":{"formatter":{"id":"f97a1d09-20f0-440a-a133-78c8f1c9b60a","type":"BasicTickFormatter"},"plot":{"id":"bcb5b128-f2b5-4730-9879-abf52f9f83d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"24eb131f-e11c-4556-89c2-549da3e782df","type":"BasicTicker"}},"id":"ff8ad163-a229-4449-b4db-6d40a8b580e9","type":"LinearAxis"},{"attributes":{"plot":{"id":"bcb5b128-f2b5-4730-9879-abf52f9f83d3","subtype":"Figure","type":"Plot"},"source":{"id":"20efd961-f2cf-49e1-abe9-45737b0f71bc","type":"ColumnDataSource"}},"id":"d128e4de-0ed1-4740-95d9-5b3e420e432e","type":"DrawTool"},{"attributes":{"below":[{"id":"ff8ad163-a229-4449-b4db-6d40a8b580e9","type":"LinearAxis"}],"left":[{"id":"863bbd8b-63af-41f7-b84b-4af92826d7dd","type":"LinearAxis"}],"renderers":[{"id":"ff8ad163-a229-4449-b4db-6d40a8b580e9","type":"LinearAxis"},{"id":"b398bc22-b936-4a75-9179-bfad6fec873d","type":"Grid"},{"id":"863bbd8b-63af-41f7-b84b-4af92826d7dd","type":"LinearAxis"},{"id":"289aa95c-dcb5-430a-9d53-88f379e89abe","type":"Grid"},{"id":"04a37872-ed33-4dd6-8788-7cce454fef84","type":"GlyphRenderer"}],"title":{"id":"d62d3e91-fa76-426f-b7e9-cd205d10954a","type":"Title"},"tool_events":{"id":"7649d618-3ee7-440e-b6cf-e6a6cc0d002d","type":"ToolEvents"},"toolbar":{"id":"51498b51-7e4d-4877-b261-b1743dff6b0e","type":"Toolbar"},"x_range":{"id":"22603e67-c425-4f0f-88f2-63e726ed9328","type":"Range1d"},"y_range":{"id":"5bc836b7-e6ea-4e56-b9fa-f20cebc47ba8","type":"Range1d"}},"id":"bcb5b128-f2b5-4730-9879-abf52f9f83d3","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"be66595c-df4a-4774-b005-c0556c4c2198","type":"BasicTickFormatter"},"plot":{"id":"bcb5b128-f2b5-4730-9879-abf52f9f83d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"b217b101-a599-4a8f-bbca-407abc76b7f6","type":"BasicTicker"}},"id":"863bbd8b-63af-41f7-b84b-4af92826d7dd","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"bcb5b128-f2b5-4730-9879-abf52f9f83d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"b217b101-a599-4a8f-bbca-407abc76b7f6","type":"BasicTicker"}},"id":"289aa95c-dcb5-430a-9d53-88f379e89abe","type":"Grid"},{"attributes":{"data_source":{"id":"20efd961-f2cf-49e1-abe9-45737b0f71bc","type":"ColumnDataSource"},"glyph":{"id":"04d742b1-0d94-4300-bd2e-c38f40c52a0f","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"f1b881fc-c84a-48e6-8cb8-035777d2c70b","type":"Line"},"selection_glyph":null},"id":"04a37872-ed33-4dd6-8788-7cce454fef84","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":10},"id":"5bc836b7-e6ea-4e56-b9fa-f20cebc47ba8","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[],"y":[]}},"id":"20efd961-f2cf-49e1-abe9-45737b0f71bc","type":"ColumnDataSource"},{"attributes":{},"id":"f97a1d09-20f0-440a-a133-78c8f1c9b60a","type":"BasicTickFormatter"},{"attributes":{},"id":"7649d618-3ee7-440e-b6cf-e6a6cc0d002d","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d128e4de-0ed1-4740-95d9-5b3e420e432e","type":"DrawTool"}]},"id":"51498b51-7e4d-4877-b261-b1743dff6b0e","type":"Toolbar"},{"attributes":{"callback":null,"end":10},"id":"22603e67-c425-4f0f-88f2-63e726ed9328","type":"Range1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1b881fc-c84a-48e6-8cb8-035777d2c70b","type":"Line"},{"attributes":{},"id":"b217b101-a599-4a8f-bbca-407abc76b7f6","type":"BasicTicker"},{"attributes":{},"id":"be66595c-df4a-4774-b005-c0556c4c2198","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"bcb5b128-f2b5-4730-9879-abf52f9f83d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"24eb131f-e11c-4556-89c2-549da3e782df","type":"BasicTicker"}},"id":"b398bc22-b936-4a75-9179-bfad6fec873d","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"04d742b1-0d94-4300-bd2e-c38f40c52a0f","type":"Line"}],"root_ids":["bcb5b128-f2b5-4730-9879-abf52f9f83d3"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"0d4004eb-ab38-4819-b81b-f08380fd8780","elementid":"2896db42-7ade-4468-9c57-213693b99299","modelid":"bcb5b128-f2b5-4730-9879-abf52f9f83d3"}];
                  
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