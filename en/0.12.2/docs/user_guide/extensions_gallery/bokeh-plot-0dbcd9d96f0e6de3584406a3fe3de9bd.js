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
      };var element = document.getElementById("d589468d-7fec-44a6-9c27-179afaf51b79");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd589468d-7fec-44a6-9c27-179afaf51b79' but no matching script tag was found. ")
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
          LatexLabel: require("custom/latex_label") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/latex_label": "\nLabel = require \"models/annotations/label\"\n\nclass LatexLabelView extends Label.View\n  render: () ->\n\n    #--- Start of copied section from ``Label.render`` implementation\n\n    ctx = @plot_view.canvas_view.ctx\n\n    # Here because AngleSpec does units tranform and label doesn\'t support specs\n    switch @mget(\'angle_units\')\n      when \"rad\" then angle = -1 * @mget(\'angle\')\n      when \"deg\" then angle = -1 * @mget(\'angle\') * Math.PI/180.0\n\n    if @mget(\'x_units\') == \"data\"\n      vx = @xmapper.map_to_target(@mget(\'x\'))\n    else\n      vx = @mget(\'x\')\n    sx = @canvas.vx_to_sx(vx)\n\n    if @mget(\'y_units\') == \"data\"\n      vy = @ymapper.map_to_target(@mget(\'y\'))\n    else\n      vy = @mget(\'y\')\n    sy = @canvas.vy_to_sy(vy)\n\n    if @model.panel?\n      panel_offset = @_get_panel_offset()\n      sx += panel_offset.x\n      sy += panel_offset.y\n\n    #--- End of copied section from ``Label.render`` implementation\n\n    # ``katex`` is loaded into the global window at runtime\n    # katex.renderToString returns a html ``span`` element\n    latex = katex.renderToString(@mget(\'text\'), {displayMode: true})\n\n    # Must render as superpositioned div (not on canvas) so that KaTex\n    # css can properly style the text\n    @_css_text(ctx, latex, sx + @mget(\'x_offset\'), sy - @mget(\'y_offset\'), angle)\n\nclass LatexLabel extends Label.Model\n  type: \'LatexLabel\'\n  default_view: LatexLabelView\n\nmodule.exports =\n  Model: LatexLabel\n  View: LatexLabelView\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"eb30f71a-fad0-4c51-9fbe-f83c8b74505a":{"roots":{"references":[{"attributes":{"formatter":{"id":"c7292bb2-a852-473e-aa3b-59f75eab86d3","type":"BasicTickFormatter"},"plot":{"id":"7e3c5472-5312-4867-ab85-fc143d736878","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a7c6c41-fab9-4f18-b346-7f7ff4c07158","type":"BasicTicker"}},"id":"7468aef3-2ba4-4101-ac4a-d04a05db150a","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2,0.21,0.22,0.23,0.24,0.25,0.26,0.27,0.28,0.29,0.3,0.31,0.32,0.33,0.34,0.35000000000000003,0.36,0.37,0.38,0.39,0.4,0.41000000000000003,0.42,0.43,0.44,0.45,0.46,0.47000000000000003,0.48,0.49,0.5,0.51,0.52,0.53,0.54,0.55,0.56,0.5700000000000001,0.58,0.59,0.6,0.61,0.62,0.63,0.64,0.65,0.66,0.67,0.68,0.6900000000000001,0.7000000000000001,0.71,0.72,0.73,0.74,0.75,0.76,0.77,0.78,0.79,0.8,0.81,0.8200000000000001,0.8300000000000001,0.84,0.85,0.86,0.87,0.88,0.89,0.9,0.91,0.92,0.93,0.9400000000000001,0.9500000000000001,0.96,0.97,0.98,0.99,1.0],"y":[3.0,2.992114701314478,2.968583161128631,2.9297764858882513,2.8763066800438635,2.8090169943749475,2.7289686274214118,2.6374239897486897,2.5358267949789965,2.425779291565073,2.3090169943749475,2.187381314585725,2.0627905195293135,1.9372094804706865,1.8126186854142752,1.6909830056250525,1.5742207084349273,1.464173205021003,1.3625760102513103,1.2710313725785887,1.1909830056250525,1.1236933199561365,1.0702235141117487,1.031416838871369,1.0078852986855222,1.0,1.007885298685522,1.031416838871369,1.0702235141117487,1.1236933199561363,1.1909830056250525,1.2710313725785884,1.3625760102513105,1.4641732050210037,1.5742207084349278,1.6909830056250525,1.8126186854142754,1.9372094804706868,2.062790519529313,2.1873813145857244,2.3090169943749475,2.4257792915650724,2.535826794978996,2.6374239897486893,2.7289686274214113,2.8090169943749475,2.8763066800438635,2.9297764858882513,2.968583161128631,2.9921147013144775,3.0,2.992114701314478,2.968583161128631,2.9297764858882513,2.8763066800438635,2.809016994374947,2.728968627421411,2.6374239897486897,2.5358267949789974,2.425779291565073,2.309016994374948,2.187381314585725,2.0627905195293135,1.9372094804706872,1.812618685414275,1.690983005625053,1.5742207084349267,1.4641732050210035,1.3625760102513094,1.2710313725785882,1.1909830056250528,1.123693319956137,1.0702235141117487,1.031416838871369,1.007885298685522,1.0,1.007885298685522,1.031416838871369,1.0702235141117482,1.1236933199561365,1.1909830056250523,1.271031372578589,1.3625760102513103,1.4641732050210043,1.574220708434926,1.690983005625052,1.8126186854142743,1.9372094804706865,2.0627905195293126,2.187381314585725,2.309016994374947,2.4257792915650733,2.5358267949789965,2.63742398974869,2.7289686274214118,2.809016994374947,2.876306680043863,2.9297764858882513,2.968583161128631,2.992114701314478,3.0]}},"id":"9de74b55-f96b-477b-87ab-8a83d4fab6be","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7e3c5472-5312-4867-ab85-fc143d736878","subtype":"Figure","type":"Plot"}},"id":"b963499a-a9e3-4026-aaad-1a0553192360","type":"HelpTool"},{"attributes":{"formatter":{"id":"4800c117-a066-40a5-ac80-3b56a6379aa9","type":"BasicTickFormatter"},"plot":{"id":"7e3c5472-5312-4867-ab85-fc143d736878","subtype":"Figure","type":"Plot"},"ticker":{"id":"8fef766e-2df2-409a-8a00-bd3c11ef8671","type":"BasicTicker"}},"id":"ada63132-b3a0-4874-8bdb-6b5d00493c22","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"7e3c5472-5312-4867-ab85-fc143d736878","subtype":"Figure","type":"Plot"},"ticker":{"id":"8fef766e-2df2-409a-8a00-bd3c11ef8671","type":"BasicTicker"}},"id":"fb179d1a-1ae1-4aeb-a37b-4d820b862d9f","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"7e3c5472-5312-4867-ab85-fc143d736878","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\sum_{n=1}^\\infty\\frac{-e^{i\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"05b77118-3378-41ee-9fc3-cc628c71520e","type":"LatexLabel"},{"attributes":{},"id":"4800c117-a066-40a5-ac80-3b56a6379aa9","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"b96f4755-a131-4e52-bc4a-7c768394889f","type":"BoxAnnotation"},"plot":{"id":"7e3c5472-5312-4867-ab85-fc143d736878","subtype":"Figure","type":"Plot"}},"id":"22757529-2755-4d0f-8ab2-227d853562cc","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"7468aef3-2ba4-4101-ac4a-d04a05db150a","type":"LinearAxis"}],"left":[{"id":"ada63132-b3a0-4874-8bdb-6b5d00493c22","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"7468aef3-2ba4-4101-ac4a-d04a05db150a","type":"LinearAxis"},{"id":"9d3a17ce-a0b2-4ca7-b3e9-fc8e18a3c1ee","type":"Grid"},{"id":"ada63132-b3a0-4874-8bdb-6b5d00493c22","type":"LinearAxis"},{"id":"fb179d1a-1ae1-4aeb-a37b-4d820b862d9f","type":"Grid"},{"id":"b96f4755-a131-4e52-bc4a-7c768394889f","type":"BoxAnnotation"},{"id":"38b02c10-af26-4e2c-94b0-f7898c91db24","type":"GlyphRenderer"},{"id":"05b77118-3378-41ee-9fc3-cc628c71520e","type":"LatexLabel"}],"title":{"id":"acd561bd-bc11-4ef0-9ad5-aaf637d715b9","type":"Title"},"tool_events":{"id":"be0a5859-f331-455d-ad00-0ec26944eb55","type":"ToolEvents"},"toolbar":{"id":"6fe4cf0f-75df-486b-aa7a-d607eaf96d7b","type":"Toolbar"},"x_range":{"id":"0436a230-cc45-4d20-8853-bd0681db027d","type":"DataRange1d"},"y_range":{"id":"d5b95454-92c0-4199-a634-43aef8c150be","type":"DataRange1d"}},"id":"7e3c5472-5312-4867-ab85-fc143d736878","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"7e3c5472-5312-4867-ab85-fc143d736878","subtype":"Figure","type":"Plot"}},"id":"06e15dfe-c9ff-4ffc-aff9-38a9394c8498","type":"ResetTool"},{"attributes":{"data_source":{"id":"9de74b55-f96b-477b-87ab-8a83d4fab6be","type":"ColumnDataSource"},"glyph":{"id":"1c74f64e-afdc-4152-8c22-0fea2c2cdb2e","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"fad832ef-581e-4427-b735-07848125907b","type":"Line"},"selection_glyph":null},"id":"38b02c10-af26-4e2c-94b0-f7898c91db24","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fad832ef-581e-4427-b735-07848125907b","type":"Line"},{"attributes":{},"id":"c7292bb2-a852-473e-aa3b-59f75eab86d3","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7e3c5472-5312-4867-ab85-fc143d736878","subtype":"Figure","type":"Plot"}},"id":"43099f94-16f3-47dd-8bf2-0f1c67c0c1c5","type":"WheelZoomTool"},{"attributes":{},"id":"be0a5859-f331-455d-ad00-0ec26944eb55","type":"ToolEvents"},{"attributes":{"plot":{"id":"7e3c5472-5312-4867-ab85-fc143d736878","subtype":"Figure","type":"Plot"}},"id":"e919a62b-ef69-475c-b2d5-e26c97aefb54","type":"PanTool"},{"attributes":{"callback":null},"id":"0436a230-cc45-4d20-8853-bd0681db027d","type":"DataRange1d"},{"attributes":{"callback":null},"id":"d5b95454-92c0-4199-a634-43aef8c150be","type":"DataRange1d"},{"attributes":{},"id":"4a7c6c41-fab9-4f18-b346-7f7ff4c07158","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1c74f64e-afdc-4152-8c22-0fea2c2cdb2e","type":"Line"},{"attributes":{"plot":{"id":"7e3c5472-5312-4867-ab85-fc143d736878","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a7c6c41-fab9-4f18-b346-7f7ff4c07158","type":"BasicTicker"}},"id":"9d3a17ce-a0b2-4ca7-b3e9-fc8e18a3c1ee","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e919a62b-ef69-475c-b2d5-e26c97aefb54","type":"PanTool"},{"id":"43099f94-16f3-47dd-8bf2-0f1c67c0c1c5","type":"WheelZoomTool"},{"id":"22757529-2755-4d0f-8ab2-227d853562cc","type":"BoxZoomTool"},{"id":"a17a3f75-a9c5-44dc-9153-b66bc136f25a","type":"SaveTool"},{"id":"06e15dfe-c9ff-4ffc-aff9-38a9394c8498","type":"ResetTool"},{"id":"b963499a-a9e3-4026-aaad-1a0553192360","type":"HelpTool"}]},"id":"6fe4cf0f-75df-486b-aa7a-d607eaf96d7b","type":"Toolbar"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"acd561bd-bc11-4ef0-9ad5-aaf637d715b9","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b96f4755-a131-4e52-bc4a-7c768394889f","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"7e3c5472-5312-4867-ab85-fc143d736878","subtype":"Figure","type":"Plot"}},"id":"a17a3f75-a9c5-44dc-9153-b66bc136f25a","type":"SaveTool"},{"attributes":{},"id":"8fef766e-2df2-409a-8a00-bd3c11ef8671","type":"BasicTicker"}],"root_ids":["7e3c5472-5312-4867-ab85-fc143d736878"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"eb30f71a-fad0-4c51-9fbe-f83c8b74505a","elementid":"d589468d-7fec-44a6-9c27-179afaf51b79","modelid":"7e3c5472-5312-4867-ab85-fc143d736878"}];
                  
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