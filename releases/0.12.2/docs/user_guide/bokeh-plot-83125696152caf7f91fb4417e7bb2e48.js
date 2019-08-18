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
      };var element = document.getElementById("7d7d37e5-ec72-43cf-91ba-14f733223ab6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7d7d37e5-ec72-43cf-91ba-14f733223ab6' but no matching script tag was found. ")
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
                  var docs_json = {"8d98f85d-8e44-4de6-b707-f1b222867754":{"roots":{"references":[{"attributes":{},"id":"d600da4d-ca5a-485e-8c79-1c1c5c4a5537","type":"BasicTicker"},{"attributes":{},"id":"1a2aa724-a001-455c-8c5f-0a06c00937d6","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3c37bf90-9317-4b22-afe2-3517141b2c1f","subtype":"Figure","type":"Plot"}},"id":"76c064f6-0b55-4081-95cd-9d8170897cff","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"3c37bf90-9317-4b22-afe2-3517141b2c1f","subtype":"Figure","type":"Plot"}},"id":"1697905e-754e-4a23-82ba-25f638525293","type":"ResetTool"},{"attributes":{},"id":"796c3a0a-dd03-441c-8ea2-90b3d65fab55","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"266d5483-6969-47c4-8f89-86fe02f04a90","type":"AnnularWedge"},{"attributes":{},"id":"efed17d1-eef7-4815-a5f2-36d0ce4d3fcd","type":"ToolEvents"},{"attributes":{"plot":{"id":"3c37bf90-9317-4b22-afe2-3517141b2c1f","subtype":"Figure","type":"Plot"}},"id":"d7ecf1dc-1bb8-42a5-b5e1-9dce9616df7d","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"8c851af9-8ae0-4827-a261-992f676fa8d7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3c37bf90-9317-4b22-afe2-3517141b2c1f","subtype":"Figure","type":"Plot"}},"id":"1eeca725-93e8-4e1a-9771-d04df5667655","type":"PanTool"},{"attributes":{"plot":{"id":"3c37bf90-9317-4b22-afe2-3517141b2c1f","subtype":"Figure","type":"Plot"}},"id":"4a88b3c1-83fb-44a9-9e5d-55d9864842ad","type":"SaveTool"},{"attributes":{"below":[{"id":"032aabcf-2acc-4907-9d80-72cfd0bf1518","type":"LinearAxis"}],"left":[{"id":"709682c4-cabb-498c-95ac-842134b71957","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"032aabcf-2acc-4907-9d80-72cfd0bf1518","type":"LinearAxis"},{"id":"a5728036-ceed-4cc0-8817-ab243967af60","type":"Grid"},{"id":"709682c4-cabb-498c-95ac-842134b71957","type":"LinearAxis"},{"id":"896ae3d2-3bc2-4b25-9d23-8df8254b87a0","type":"Grid"},{"id":"0f73e635-f9b8-4678-900a-f508ef4a7e77","type":"BoxAnnotation"},{"id":"ca43fc75-a0ed-4d72-8d1d-796b7f5f586d","type":"GlyphRenderer"}],"title":{"id":"777d7939-5f25-4693-8fc6-ba3ee157bd45","type":"Title"},"tool_events":{"id":"efed17d1-eef7-4815-a5f2-36d0ce4d3fcd","type":"ToolEvents"},"toolbar":{"id":"af0fcd55-dc2a-4464-a998-99fd04b655aa","type":"Toolbar"},"x_range":{"id":"98ae8447-7485-4df0-9302-a42194e7d762","type":"DataRange1d"},"y_range":{"id":"b4096db8-b499-412a-ab2b-927ebd991e79","type":"DataRange1d"}},"id":"3c37bf90-9317-4b22-afe2-3517141b2c1f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"b4096db8-b499-412a-ab2b-927ebd991e79","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"3c37bf90-9317-4b22-afe2-3517141b2c1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d600da4d-ca5a-485e-8c79-1c1c5c4a5537","type":"BasicTicker"}},"id":"896ae3d2-3bc2-4b25-9d23-8df8254b87a0","type":"Grid"},{"attributes":{"formatter":{"id":"1a2aa724-a001-455c-8c5f-0a06c00937d6","type":"BasicTickFormatter"},"plot":{"id":"3c37bf90-9317-4b22-afe2-3517141b2c1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"152a29f8-3f2e-4e23-ae03-339e63c0159f","type":"BasicTicker"}},"id":"032aabcf-2acc-4907-9d80-72cfd0bf1518","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"777d7939-5f25-4693-8fc6-ba3ee157bd45","type":"Title"},{"attributes":{"data_source":{"id":"8c851af9-8ae0-4827-a261-992f676fa8d7","type":"ColumnDataSource"},"glyph":{"id":"266d5483-6969-47c4-8f89-86fe02f04a90","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":{"id":"93516040-fa06-4c72-95fc-f1a2cb02b3bb","type":"AnnularWedge"},"selection_glyph":null},"id":"ca43fc75-a0ed-4d72-8d1d-796b7f5f586d","type":"GlyphRenderer"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"93516040-fa06-4c72-95fc-f1a2cb02b3bb","type":"AnnularWedge"},{"attributes":{},"id":"152a29f8-3f2e-4e23-ae03-339e63c0159f","type":"BasicTicker"},{"attributes":{"plot":{"id":"3c37bf90-9317-4b22-afe2-3517141b2c1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"152a29f8-3f2e-4e23-ae03-339e63c0159f","type":"BasicTicker"}},"id":"a5728036-ceed-4cc0-8817-ab243967af60","type":"Grid"},{"attributes":{"formatter":{"id":"796c3a0a-dd03-441c-8ea2-90b3d65fab55","type":"BasicTickFormatter"},"plot":{"id":"3c37bf90-9317-4b22-afe2-3517141b2c1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d600da4d-ca5a-485e-8c79-1c1c5c4a5537","type":"BasicTicker"}},"id":"709682c4-cabb-498c-95ac-842134b71957","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1eeca725-93e8-4e1a-9771-d04df5667655","type":"PanTool"},{"id":"76c064f6-0b55-4081-95cd-9d8170897cff","type":"WheelZoomTool"},{"id":"1c5b9217-111b-4a19-a36c-8ee836769c59","type":"BoxZoomTool"},{"id":"4a88b3c1-83fb-44a9-9e5d-55d9864842ad","type":"SaveTool"},{"id":"1697905e-754e-4a23-82ba-25f638525293","type":"ResetTool"},{"id":"d7ecf1dc-1bb8-42a5-b5e1-9dce9616df7d","type":"HelpTool"}]},"id":"af0fcd55-dc2a-4464-a998-99fd04b655aa","type":"Toolbar"},{"attributes":{"callback":null},"id":"98ae8447-7485-4df0-9302-a42194e7d762","type":"DataRange1d"},{"attributes":{"overlay":{"id":"0f73e635-f9b8-4678-900a-f508ef4a7e77","type":"BoxAnnotation"},"plot":{"id":"3c37bf90-9317-4b22-afe2-3517141b2c1f","subtype":"Figure","type":"Plot"}},"id":"1c5b9217-111b-4a19-a36c-8ee836769c59","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0f73e635-f9b8-4678-900a-f508ef4a7e77","type":"BoxAnnotation"}],"root_ids":["3c37bf90-9317-4b22-afe2-3517141b2c1f"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"8d98f85d-8e44-4de6-b707-f1b222867754","elementid":"7d7d37e5-ec72-43cf-91ba-14f733223ab6","modelid":"3c37bf90-9317-4b22-afe2-3517141b2c1f"}];
                  
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