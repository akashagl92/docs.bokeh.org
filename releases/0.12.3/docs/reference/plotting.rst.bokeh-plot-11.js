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
      };var element = document.getElementById("c639859e-940f-47e5-9e8c-f88869016a16");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c639859e-940f-47e5-9e8c-f88869016a16' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"f84f3d5a-c5f2-4cdd-8ddb-2a6a447d52e6":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"740f9cbe-303e-4f2c-9241-1dfc84855530","type":"PanTool"},{"id":"fa8ae10c-f16b-4345-b158-e0851efe6699","type":"WheelZoomTool"},{"id":"6eb7ba77-4f87-484d-b078-26d5ee8c8b52","type":"BoxZoomTool"},{"id":"3c1d2d3f-4e2f-41f9-95df-85f6a130a036","type":"SaveTool"},{"id":"f19d1933-a7bf-4f6d-b26e-68767dd47187","type":"ResetTool"},{"id":"6e2ec276-566c-4549-a1db-345e9561e240","type":"HelpTool"}]},"id":"dfd40c13-283c-476a-993f-0b02b908726e","type":"Toolbar"},{"attributes":{"formatter":{"id":"bc39c774-0773-496e-aa9b-5b4d78856af0","type":"BasicTickFormatter"},"plot":{"id":"fb016e79-1b71-4e9c-887e-d421e34734bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"627c8485-db54-436a-8ed3-86715ec7e643","type":"BasicTicker"}},"id":"04dfe7a1-d370-41ae-abe4-e27c5628e316","type":"LinearAxis"},{"attributes":{"plot":{"id":"fb016e79-1b71-4e9c-887e-d421e34734bf","subtype":"Figure","type":"Plot"}},"id":"f19d1933-a7bf-4f6d-b26e-68767dd47187","type":"ResetTool"},{"attributes":{},"id":"8def6d7f-bb70-4da7-941e-4ca31c7c3424","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8def6d7f-bb70-4da7-941e-4ca31c7c3424","type":"BasicTickFormatter"},"plot":{"id":"fb016e79-1b71-4e9c-887e-d421e34734bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"685e83a8-a0f6-4c73-9f01-8e45b3da9958","type":"BasicTicker"}},"id":"ac3c12c7-9271-4498-9c4f-ed364a2d411f","type":"LinearAxis"},{"attributes":{},"id":"627c8485-db54-436a-8ed3-86715ec7e643","type":"BasicTicker"},{"attributes":{"data_source":{"id":"0085f99c-1397-4698-bce6-707766f2285e","type":"ColumnDataSource"},"glyph":{"id":"d847a4c9-cd84-4d42-953a-e66302f8bccf","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"def6b857-3b46-48aa-8058-6d7487387216","type":"Line"},"selection_glyph":null},"id":"abd2e53d-a86d-4901-8901-472c45ae0b5e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"fb016e79-1b71-4e9c-887e-d421e34734bf","subtype":"Figure","type":"Plot"}},"id":"740f9cbe-303e-4f2c-9241-1dfc84855530","type":"PanTool"},{"attributes":{"overlay":{"id":"5a3287a2-3f0d-486b-8fdc-b3054fe29194","type":"BoxAnnotation"},"plot":{"id":"fb016e79-1b71-4e9c-887e-d421e34734bf","subtype":"Figure","type":"Plot"}},"id":"6eb7ba77-4f87-484d-b078-26d5ee8c8b52","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"fb016e79-1b71-4e9c-887e-d421e34734bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"627c8485-db54-436a-8ed3-86715ec7e643","type":"BasicTicker"}},"id":"2e5f22d7-537c-48b0-be80-1d002d1f9410","type":"Grid"},{"attributes":{},"id":"b77cd9b8-49f1-4a26-8710-29c42fc06b2c","type":"ToolEvents"},{"attributes":{"plot":{"id":"fb016e79-1b71-4e9c-887e-d421e34734bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"685e83a8-a0f6-4c73-9f01-8e45b3da9958","type":"BasicTicker"}},"id":"bde62248-01e0-432b-8d75-7fc057b513c9","type":"Grid"},{"attributes":{},"id":"685e83a8-a0f6-4c73-9f01-8e45b3da9958","type":"BasicTicker"},{"attributes":{"below":[{"id":"ac3c12c7-9271-4498-9c4f-ed364a2d411f","type":"LinearAxis"}],"left":[{"id":"04dfe7a1-d370-41ae-abe4-e27c5628e316","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ac3c12c7-9271-4498-9c4f-ed364a2d411f","type":"LinearAxis"},{"id":"bde62248-01e0-432b-8d75-7fc057b513c9","type":"Grid"},{"id":"04dfe7a1-d370-41ae-abe4-e27c5628e316","type":"LinearAxis"},{"id":"2e5f22d7-537c-48b0-be80-1d002d1f9410","type":"Grid"},{"id":"5a3287a2-3f0d-486b-8fdc-b3054fe29194","type":"BoxAnnotation"},{"id":"abd2e53d-a86d-4901-8901-472c45ae0b5e","type":"GlyphRenderer"}],"title":{"id":"563287d8-d9b7-4e6d-9389-974184c034dd","type":"Title"},"tool_events":{"id":"b77cd9b8-49f1-4a26-8710-29c42fc06b2c","type":"ToolEvents"},"toolbar":{"id":"dfd40c13-283c-476a-993f-0b02b908726e","type":"Toolbar"},"x_range":{"id":"15b435db-cd65-4111-85ec-e479a976b078","type":"DataRange1d"},"y_range":{"id":"40240f0a-3205-4c64-b33e-12c4e13d505f","type":"DataRange1d"}},"id":"fb016e79-1b71-4e9c-887e-d421e34734bf","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"line"},"id":"563287d8-d9b7-4e6d-9389-974184c034dd","type":"Title"},{"attributes":{"plot":{"id":"fb016e79-1b71-4e9c-887e-d421e34734bf","subtype":"Figure","type":"Plot"}},"id":"fa8ae10c-f16b-4345-b158-e0851efe6699","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"fb016e79-1b71-4e9c-887e-d421e34734bf","subtype":"Figure","type":"Plot"}},"id":"3c1d2d3f-4e2f-41f9-95df-85f6a130a036","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"0085f99c-1397-4698-bce6-707766f2285e","type":"ColumnDataSource"},{"attributes":{},"id":"bc39c774-0773-496e-aa9b-5b4d78856af0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"fb016e79-1b71-4e9c-887e-d421e34734bf","subtype":"Figure","type":"Plot"}},"id":"6e2ec276-566c-4549-a1db-345e9561e240","type":"HelpTool"},{"attributes":{"callback":null},"id":"15b435db-cd65-4111-85ec-e479a976b078","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5a3287a2-3f0d-486b-8fdc-b3054fe29194","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"def6b857-3b46-48aa-8058-6d7487387216","type":"Line"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d847a4c9-cd84-4d42-953a-e66302f8bccf","type":"Line"},{"attributes":{"callback":null},"id":"40240f0a-3205-4c64-b33e-12c4e13d505f","type":"DataRange1d"}],"root_ids":["fb016e79-1b71-4e9c-887e-d421e34734bf"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"f84f3d5a-c5f2-4cdd-8ddb-2a6a447d52e6","elementid":"c639859e-940f-47e5-9e8c-f88869016a16","modelid":"fb016e79-1b71-4e9c-887e-d421e34734bf"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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