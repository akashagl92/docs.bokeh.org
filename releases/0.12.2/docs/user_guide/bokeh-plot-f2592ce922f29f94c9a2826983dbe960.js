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
      };var element = document.getElementById("b28ace77-beb2-4165-a38e-0543c0108515");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b28ace77-beb2-4165-a38e-0543c0108515' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"4529a06b-4f30-445a-92a7-79074ef09fc3":{"roots":{"references":[{"attributes":{"plot":{"id":"f405b1b4-3f9f-41d0-936d-8772f0179b8c","subtype":"Figure","type":"Plot"}},"id":"c28c125a-0e3d-45cd-b475-3dc0bea7369f","type":"HelpTool"},{"attributes":{"plot":{"id":"f405b1b4-3f9f-41d0-936d-8772f0179b8c","subtype":"Figure","type":"Plot"}},"id":"c82a21c4-9519-4c7f-b939-548ed36df71a","type":"PanTool"},{"attributes":{"plot":{"id":"f405b1b4-3f9f-41d0-936d-8772f0179b8c","subtype":"Figure","type":"Plot"}},"id":"62f9cdb6-5eeb-40a6-b3e5-1fb2205578eb","type":"ResetTool"},{"attributes":{},"id":"8d6ec36e-8bfd-40c8-b422-58f01bb046d9","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"83f739e9-bd4b-465a-9c62-9ee42a248dd6","type":"Circle"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"b686b4cb-0dac-401e-aa2a-40a8870a1cd2","type":"Title"},{"attributes":{"formatter":{"id":"49e12aac-a850-4e3d-a7d5-f98df42e3e2a","type":"BasicTickFormatter"},"plot":{"id":"f405b1b4-3f9f-41d0-936d-8772f0179b8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d6ec36e-8bfd-40c8-b422-58f01bb046d9","type":"BasicTicker"}},"id":"3f19afe9-c036-4b22-95a3-74e1cfa72888","type":"LinearAxis"},{"attributes":{"below":[{"id":"ad16832f-ee8f-490c-a561-aff9547b6135","type":"LinearAxis"}],"left":[{"id":"3f19afe9-c036-4b22-95a3-74e1cfa72888","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ad16832f-ee8f-490c-a561-aff9547b6135","type":"LinearAxis"},{"id":"d35b47e6-b656-4c70-92c8-745881ffb521","type":"Grid"},{"id":"3f19afe9-c036-4b22-95a3-74e1cfa72888","type":"LinearAxis"},{"id":"b87b3783-3d49-40ab-9198-cfbd66cf42de","type":"Grid"},{"id":"696c278e-e3a2-447e-83b7-a16fb76a8e15","type":"BoxAnnotation"},{"id":"49cdf87b-49ae-48f4-ae38-4e77c1dbbeaf","type":"GlyphRenderer"}],"title":{"id":"b686b4cb-0dac-401e-aa2a-40a8870a1cd2","type":"Title"},"tool_events":{"id":"b40ae50a-888b-40d3-90c2-5c8428f49852","type":"ToolEvents"},"toolbar":{"id":"b8a7c832-5939-4443-aa22-e722c99ebbbb","type":"Toolbar"},"x_range":{"id":"1341a887-0595-4de5-a300-3cba7a5ad513","type":"DataRange1d"},"y_range":{"id":"ea16ff82-7760-41e1-8b96-9d260f87ad0d","type":"DataRange1d"}},"id":"f405b1b4-3f9f-41d0-936d-8772f0179b8c","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"696c278e-e3a2-447e-83b7-a16fb76a8e15","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"e92faa00-8f47-43e9-8a76-37bd534aa239","type":"BasicTickFormatter"},"plot":{"id":"f405b1b4-3f9f-41d0-936d-8772f0179b8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"111f36d6-a38a-4cec-88d6-5b66378349d0","type":"BasicTicker"}},"id":"ad16832f-ee8f-490c-a561-aff9547b6135","type":"LinearAxis"},{"attributes":{},"id":"e92faa00-8f47-43e9-8a76-37bd534aa239","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"67f05d12-6ce1-48f7-ad61-da69d302941f","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c82a21c4-9519-4c7f-b939-548ed36df71a","type":"PanTool"},{"id":"d5db63a5-a13e-4b63-9c4e-d06abc83b469","type":"WheelZoomTool"},{"id":"5191672b-8bb5-495f-ab53-a567dae50f92","type":"BoxZoomTool"},{"id":"481d4db2-0e28-4c9f-b1ca-9b768e2fed88","type":"SaveTool"},{"id":"62f9cdb6-5eeb-40a6-b3e5-1fb2205578eb","type":"ResetTool"},{"id":"c28c125a-0e3d-45cd-b475-3dc0bea7369f","type":"HelpTool"}]},"id":"b8a7c832-5939-4443-aa22-e722c99ebbbb","type":"Toolbar"},{"attributes":{"callback":null},"id":"1341a887-0595-4de5-a300-3cba7a5ad513","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ea16ff82-7760-41e1-8b96-9d260f87ad0d","type":"DataRange1d"},{"attributes":{"plot":{"id":"f405b1b4-3f9f-41d0-936d-8772f0179b8c","subtype":"Figure","type":"Plot"}},"id":"481d4db2-0e28-4c9f-b1ca-9b768e2fed88","type":"SaveTool"},{"attributes":{"plot":{"id":"f405b1b4-3f9f-41d0-936d-8772f0179b8c","subtype":"Figure","type":"Plot"}},"id":"d5db63a5-a13e-4b63-9c4e-d06abc83b469","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"f405b1b4-3f9f-41d0-936d-8772f0179b8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"111f36d6-a38a-4cec-88d6-5b66378349d0","type":"BasicTicker"}},"id":"d35b47e6-b656-4c70-92c8-745881ffb521","type":"Grid"},{"attributes":{},"id":"b40ae50a-888b-40d3-90c2-5c8428f49852","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"f405b1b4-3f9f-41d0-936d-8772f0179b8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d6ec36e-8bfd-40c8-b422-58f01bb046d9","type":"BasicTicker"}},"id":"b87b3783-3d49-40ab-9198-cfbd66cf42de","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"9fa17630-12cb-408f-a1f9-0bcdcaf58034","type":"ColumnDataSource"},{"attributes":{},"id":"49e12aac-a850-4e3d-a7d5-f98df42e3e2a","type":"BasicTickFormatter"},{"attributes":{},"id":"111f36d6-a38a-4cec-88d6-5b66378349d0","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9fa17630-12cb-408f-a1f9-0bcdcaf58034","type":"ColumnDataSource"},"glyph":{"id":"83f739e9-bd4b-465a-9c62-9ee42a248dd6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"67f05d12-6ce1-48f7-ad61-da69d302941f","type":"Circle"},"selection_glyph":null},"id":"49cdf87b-49ae-48f4-ae38-4e77c1dbbeaf","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"696c278e-e3a2-447e-83b7-a16fb76a8e15","type":"BoxAnnotation"},"plot":{"id":"f405b1b4-3f9f-41d0-936d-8772f0179b8c","subtype":"Figure","type":"Plot"}},"id":"5191672b-8bb5-495f-ab53-a567dae50f92","type":"BoxZoomTool"}],"root_ids":["f405b1b4-3f9f-41d0-936d-8772f0179b8c"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"4529a06b-4f30-445a-92a7-79074ef09fc3","elementid":"b28ace77-beb2-4165-a38e-0543c0108515","modelid":"f405b1b4-3f9f-41d0-936d-8772f0179b8c"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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