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
      };var element = document.getElementById("78e2929a-5aa6-425c-9446-2ee35596fd55");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '78e2929a-5aa6-425c-9446-2ee35596fd55' but no matching script tag was found. ")
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
                  var docs_json = {"a90a7dd6-725c-44f5-9269-13de9943d12d":{"roots":{"references":[{"attributes":{"plot":{"id":"279b2e1f-f447-4be3-8ab7-eee20c7e836b","subtype":"Figure","type":"Plot"}},"id":"eadef10f-4ff6-4de7-8389-7bc64fa36114","type":"SaveTool"},{"attributes":{},"id":"37a46da4-a6a0-4867-b8ba-6992ea04f00e","type":"BasicTicker"},{"attributes":{},"id":"0af344e2-3a7e-4ef5-98ef-bcf8eea93e20","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3e6d919e-7d56-434b-a368-3ae560be85b6","type":"ColumnDataSource"},"glyph":{"id":"97765287-7dbe-480a-9037-f418daa99d0e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"5b7e949c-850e-40a8-b387-65fc7c164aa1","type":"Circle"},"selection_glyph":null},"id":"a7d8a60a-9e6c-41dd-9d20-a197432d6c7b","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"ea13af3d-e613-4d89-b9e8-5dd9e3124ec6","type":"LinearAxis"}],"left":[{"id":"cd442393-f5b2-4d4c-bc0c-70adfd79d61c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ea13af3d-e613-4d89-b9e8-5dd9e3124ec6","type":"LinearAxis"},{"id":"e169a6d7-6528-4f2a-a26f-cea102ec2ef0","type":"Grid"},{"id":"cd442393-f5b2-4d4c-bc0c-70adfd79d61c","type":"LinearAxis"},{"id":"23c6c7f4-0376-4cd4-af41-7a912b18f18e","type":"Grid"},{"id":"8cc2a0b5-9872-44c6-ab08-670dbdacefd2","type":"BoxAnnotation"},{"id":"a7d8a60a-9e6c-41dd-9d20-a197432d6c7b","type":"GlyphRenderer"}],"title":{"id":"4a88f5b4-b113-4604-8a01-947504ab85df","type":"Title"},"tool_events":{"id":"80862752-7696-4c2a-b9f8-3efa069556c6","type":"ToolEvents"},"toolbar":{"id":"51739ee5-ebcc-4177-b465-60ce92d806d5","type":"Toolbar"},"x_range":{"id":"1d386e4d-f936-4ebc-a5dc-8048831d2a74","type":"DataRange1d"},"y_range":{"id":"c847fda2-a651-4e78-b08d-93df735ac8a1","type":"DataRange1d"}},"id":"279b2e1f-f447-4be3-8ab7-eee20c7e836b","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"279b2e1f-f447-4be3-8ab7-eee20c7e836b","subtype":"Figure","type":"Plot"}},"id":"0808e2ce-9075-4d39-9477-16a3a4ec9d05","type":"PanTool"},{"attributes":{"callback":null},"id":"c847fda2-a651-4e78-b08d-93df735ac8a1","type":"DataRange1d"},{"attributes":{"plot":{"id":"279b2e1f-f447-4be3-8ab7-eee20c7e836b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3dcbe12f-abf5-4fd5-af7c-5cf59a9ae14d","type":"BasicTicker"}},"id":"e169a6d7-6528-4f2a-a26f-cea102ec2ef0","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"279b2e1f-f447-4be3-8ab7-eee20c7e836b","subtype":"Figure","type":"Plot"},"ticker":{"id":"37a46da4-a6a0-4867-b8ba-6992ea04f00e","type":"BasicTicker"}},"id":"23c6c7f4-0376-4cd4-af41-7a912b18f18e","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"97765287-7dbe-480a-9037-f418daa99d0e","type":"Circle"},{"attributes":{},"id":"80862752-7696-4c2a-b9f8-3efa069556c6","type":"ToolEvents"},{"attributes":{"plot":{"id":"279b2e1f-f447-4be3-8ab7-eee20c7e836b","subtype":"Figure","type":"Plot"}},"id":"9ffe85d0-fa96-4999-99b2-1919878e22b6","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8cc2a0b5-9872-44c6-ab08-670dbdacefd2","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0808e2ce-9075-4d39-9477-16a3a4ec9d05","type":"PanTool"},{"id":"9ffe85d0-fa96-4999-99b2-1919878e22b6","type":"WheelZoomTool"},{"id":"58252bbe-b14f-48eb-aa0f-cb9719dd1223","type":"BoxZoomTool"},{"id":"eadef10f-4ff6-4de7-8389-7bc64fa36114","type":"SaveTool"},{"id":"82c84b22-58da-4cd8-9be3-520d9320e1cd","type":"ResetTool"},{"id":"9318dfb1-f2bb-4a1d-9c05-0a5491705808","type":"HelpTool"}]},"id":"51739ee5-ebcc-4177-b465-60ce92d806d5","type":"Toolbar"},{"attributes":{"formatter":{"id":"e14f98e0-fc67-41d0-a8f4-3db2f5c18817","type":"BasicTickFormatter"},"plot":{"id":"279b2e1f-f447-4be3-8ab7-eee20c7e836b","subtype":"Figure","type":"Plot"},"ticker":{"id":"37a46da4-a6a0-4867-b8ba-6992ea04f00e","type":"BasicTicker"}},"id":"cd442393-f5b2-4d4c-bc0c-70adfd79d61c","type":"LinearAxis"},{"attributes":{"overlay":{"id":"8cc2a0b5-9872-44c6-ab08-670dbdacefd2","type":"BoxAnnotation"},"plot":{"id":"279b2e1f-f447-4be3-8ab7-eee20c7e836b","subtype":"Figure","type":"Plot"}},"id":"58252bbe-b14f-48eb-aa0f-cb9719dd1223","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"279b2e1f-f447-4be3-8ab7-eee20c7e836b","subtype":"Figure","type":"Plot"}},"id":"9318dfb1-f2bb-4a1d-9c05-0a5491705808","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b7e949c-850e-40a8-b387-65fc7c164aa1","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"3e6d919e-7d56-434b-a368-3ae560be85b6","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"1d386e4d-f936-4ebc-a5dc-8048831d2a74","type":"DataRange1d"},{"attributes":{"plot":{"id":"279b2e1f-f447-4be3-8ab7-eee20c7e836b","subtype":"Figure","type":"Plot"}},"id":"82c84b22-58da-4cd8-9be3-520d9320e1cd","type":"ResetTool"},{"attributes":{},"id":"e14f98e0-fc67-41d0-a8f4-3db2f5c18817","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"4a88f5b4-b113-4604-8a01-947504ab85df","type":"Title"},{"attributes":{},"id":"3dcbe12f-abf5-4fd5-af7c-5cf59a9ae14d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"0af344e2-3a7e-4ef5-98ef-bcf8eea93e20","type":"BasicTickFormatter"},"plot":{"id":"279b2e1f-f447-4be3-8ab7-eee20c7e836b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3dcbe12f-abf5-4fd5-af7c-5cf59a9ae14d","type":"BasicTicker"}},"id":"ea13af3d-e613-4d89-b9e8-5dd9e3124ec6","type":"LinearAxis"}],"root_ids":["279b2e1f-f447-4be3-8ab7-eee20c7e836b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"a90a7dd6-725c-44f5-9269-13de9943d12d","elementid":"78e2929a-5aa6-425c-9446-2ee35596fd55","modelid":"279b2e1f-f447-4be3-8ab7-eee20c7e836b"}];
                  
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