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
      };var element = document.getElementById("c49e8d14-36d9-4126-b53a-38cd5eb144ed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c49e8d14-36d9-4126-b53a-38cd5eb144ed' but no matching script tag was found. ")
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
                  var docs_json = {"915aed9b-b563-4edf-b9be-924da058cc57":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"6392fdae-e131-4726-9c22-c2e58df1392f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3ad0059-e956-49be-b092-70ef417f700a","type":"BasicTicker"}},"id":"c762439f-d25b-4741-8113-e9cd98f3bdb7","type":"Grid"},{"attributes":{"plot":{"id":"6392fdae-e131-4726-9c22-c2e58df1392f","subtype":"Figure","type":"Plot"}},"id":"cf729d87-f5f1-47fe-8815-c90982da350f","type":"ResetTool"},{"attributes":{"plot":{"id":"6392fdae-e131-4726-9c22-c2e58df1392f","subtype":"Figure","type":"Plot"}},"id":"94ec5c59-91e6-4530-aa5d-f11d598a8f96","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"6392fdae-e131-4726-9c22-c2e58df1392f","subtype":"Figure","type":"Plot"}},"id":"1630c3b8-ffdd-4d6c-bc10-41105af87fc6","type":"HelpTool"},{"attributes":{"plot":{"id":"6392fdae-e131-4726-9c22-c2e58df1392f","subtype":"Figure","type":"Plot"},"ticker":{"id":"000cce09-4029-4693-912b-34d41b439306","type":"BasicTicker"}},"id":"47380926-0f98-4390-9292-c5071fd1710a","type":"Grid"},{"attributes":{},"id":"000cce09-4029-4693-912b-34d41b439306","type":"BasicTicker"},{"attributes":{"plot":{"id":"6392fdae-e131-4726-9c22-c2e58df1392f","subtype":"Figure","type":"Plot"}},"id":"1f8c1281-da70-4bf8-98d3-590949ee8e68","type":"SaveTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b1cff671-02c5-4a8a-a167-0a2d46940ab5","type":"Line"},{"attributes":{},"id":"b3ad0059-e956-49be-b092-70ef417f700a","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"effff7d9-6d39-499f-8bae-77ae6ee0dcf9","type":"Line"},{"attributes":{"overlay":{"id":"7204b30b-28d4-4d2b-8a16-dcb335d92f46","type":"BoxAnnotation"},"plot":{"id":"6392fdae-e131-4726-9c22-c2e58df1392f","subtype":"Figure","type":"Plot"}},"id":"686ab076-266a-4d89-a9de-1435afde10ec","type":"BoxZoomTool"},{"attributes":{},"id":"8a19328f-ea73-4ee9-89aa-634e260f3314","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"981fbdfb-0eac-4607-99d0-4e52775c5605","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"107c125e-715c-41c6-beaa-ba88417194f9","type":"PanTool"},{"id":"94ec5c59-91e6-4530-aa5d-f11d598a8f96","type":"WheelZoomTool"},{"id":"686ab076-266a-4d89-a9de-1435afde10ec","type":"BoxZoomTool"},{"id":"1f8c1281-da70-4bf8-98d3-590949ee8e68","type":"SaveTool"},{"id":"cf729d87-f5f1-47fe-8815-c90982da350f","type":"ResetTool"},{"id":"1630c3b8-ffdd-4d6c-bc10-41105af87fc6","type":"HelpTool"}]},"id":"1819aab0-a48c-4b5f-9c7e-344adba8e34f","type":"Toolbar"},{"attributes":{},"id":"6b1a409f-5689-4e24-948b-555e05ee25a3","type":"ToolEvents"},{"attributes":{"data_source":{"id":"90485565-23d6-4d43-b5d3-52b02af75dca","type":"ColumnDataSource"},"glyph":{"id":"b1cff671-02c5-4a8a-a167-0a2d46940ab5","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"effff7d9-6d39-499f-8bae-77ae6ee0dcf9","type":"Line"},"selection_glyph":null},"id":"54fade88-2826-4ea8-97fb-9bc788481e00","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7204b30b-28d4-4d2b-8a16-dcb335d92f46","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"3ba6a3d8-52eb-480f-afe3-6bfcfcbe5375","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"90485565-23d6-4d43-b5d3-52b02af75dca","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"simple line example"},"id":"7580a2a2-caf5-4644-b0f9-5c5a91c62239","type":"Title"},{"attributes":{"axis_label":"y","formatter":{"id":"8a19328f-ea73-4ee9-89aa-634e260f3314","type":"BasicTickFormatter"},"plot":{"id":"6392fdae-e131-4726-9c22-c2e58df1392f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3ad0059-e956-49be-b092-70ef417f700a","type":"BasicTicker"}},"id":"b1172671-4175-4a97-af03-6023a7ec7982","type":"LinearAxis"},{"attributes":{},"id":"57c7e07d-2a51-425e-9c3d-e46c37a6b3ee","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"921bddfa-1663-4605-aafe-0f6f5005aeb7","type":"LinearAxis"}],"left":[{"id":"b1172671-4175-4a97-af03-6023a7ec7982","type":"LinearAxis"}],"renderers":[{"id":"921bddfa-1663-4605-aafe-0f6f5005aeb7","type":"LinearAxis"},{"id":"47380926-0f98-4390-9292-c5071fd1710a","type":"Grid"},{"id":"b1172671-4175-4a97-af03-6023a7ec7982","type":"LinearAxis"},{"id":"c762439f-d25b-4741-8113-e9cd98f3bdb7","type":"Grid"},{"id":"7204b30b-28d4-4d2b-8a16-dcb335d92f46","type":"BoxAnnotation"},{"id":"ed8bcd5a-32e7-4d8e-8e47-c62fe6180bd8","type":"Legend"},{"id":"54fade88-2826-4ea8-97fb-9bc788481e00","type":"GlyphRenderer"}],"title":{"id":"7580a2a2-caf5-4644-b0f9-5c5a91c62239","type":"Title"},"tool_events":{"id":"6b1a409f-5689-4e24-948b-555e05ee25a3","type":"ToolEvents"},"toolbar":{"id":"1819aab0-a48c-4b5f-9c7e-344adba8e34f","type":"Toolbar"},"x_range":{"id":"3ba6a3d8-52eb-480f-afe3-6bfcfcbe5375","type":"DataRange1d"},"y_range":{"id":"981fbdfb-0eac-4607-99d0-4e52775c5605","type":"DataRange1d"}},"id":"6392fdae-e131-4726-9c22-c2e58df1392f","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"6392fdae-e131-4726-9c22-c2e58df1392f","subtype":"Figure","type":"Plot"}},"id":"107c125e-715c-41c6-beaa-ba88417194f9","type":"PanTool"},{"attributes":{"axis_label":"x","formatter":{"id":"57c7e07d-2a51-425e-9c3d-e46c37a6b3ee","type":"BasicTickFormatter"},"plot":{"id":"6392fdae-e131-4726-9c22-c2e58df1392f","subtype":"Figure","type":"Plot"},"ticker":{"id":"000cce09-4029-4693-912b-34d41b439306","type":"BasicTicker"}},"id":"921bddfa-1663-4605-aafe-0f6f5005aeb7","type":"LinearAxis"},{"attributes":{"legends":[["Temp.",[{"id":"54fade88-2826-4ea8-97fb-9bc788481e00","type":"GlyphRenderer"}]]],"plot":{"id":"6392fdae-e131-4726-9c22-c2e58df1392f","subtype":"Figure","type":"Plot"}},"id":"ed8bcd5a-32e7-4d8e-8e47-c62fe6180bd8","type":"Legend"}],"root_ids":["6392fdae-e131-4726-9c22-c2e58df1392f"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"915aed9b-b563-4edf-b9be-924da058cc57","elementid":"c49e8d14-36d9-4126-b53a-38cd5eb144ed","modelid":"6392fdae-e131-4726-9c22-c2e58df1392f"}];
                  
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