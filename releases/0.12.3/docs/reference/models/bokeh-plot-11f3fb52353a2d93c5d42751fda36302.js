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
      };var element = document.getElementById("b161f5ec-b234-4707-ad12-2ab714e71420");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b161f5ec-b234-4707-ad12-2ab714e71420' but no matching script tag was found. ")
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
                  var docs_json = {"e083c137-bbc4-440a-bec5-fc3e98f1e602":{"roots":{"references":[{"attributes":{"plot":{"id":"f20a7114-cfe4-4143-af4f-7d6fa4ca5796","type":"Plot"},"ticker":{"id":"26ed6e02-bf5b-4a8d-a00a-d54164d331c3","type":"BasicTicker"}},"id":"540f7831-024a-4711-a866-c0be5d4eb365","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"05358b39-0138-4e87-a7b3-44d9317ae0e9","type":"ColumnDataSource"},{"attributes":{},"id":"0191c290-4490-43dc-8e3d-37f2fddede85","type":"BasicTicker"},{"attributes":{"data_source":{"id":"05358b39-0138-4e87-a7b3-44d9317ae0e9","type":"ColumnDataSource"},"glyph":{"id":"08897059-0fcf-4894-8f93-109aca511d2c","type":"X"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f12a4c6a-7a7a-4925-a48d-bf71c179b6f5","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"d3255d89-aacd-4a08-a5a4-1f541397dbe6","type":"BasicTickFormatter"},"plot":{"id":"f20a7114-cfe4-4143-af4f-7d6fa4ca5796","type":"Plot"},"ticker":{"id":"26ed6e02-bf5b-4a8d-a00a-d54164d331c3","type":"BasicTicker"}},"id":"deb83b68-0da2-4d17-bf34-87b29c0d7cbf","type":"LinearAxis"},{"attributes":{},"id":"84c85d47-b290-42f1-8040-abec036d15a9","type":"ToolEvents"},{"attributes":{"formatter":{"id":"64b5f146-f7fb-4cc6-949c-ee1761e5f963","type":"BasicTickFormatter"},"plot":{"id":"f20a7114-cfe4-4143-af4f-7d6fa4ca5796","type":"Plot"},"ticker":{"id":"0191c290-4490-43dc-8e3d-37f2fddede85","type":"BasicTicker"}},"id":"5f73b720-9702-41ee-9ea6-02bd2ddf4986","type":"LinearAxis"},{"attributes":{},"id":"64b5f146-f7fb-4cc6-949c-ee1761e5f963","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"74991f1d-e028-4f4c-ace4-98e5bc70c8e1","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b2a89294-c5d1-4017-af7c-a59f8f933b22","type":"Toolbar"},{"attributes":{"below":[{"id":"deb83b68-0da2-4d17-bf34-87b29c0d7cbf","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"5f73b720-9702-41ee-9ea6-02bd2ddf4986","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f12a4c6a-7a7a-4925-a48d-bf71c179b6f5","type":"GlyphRenderer"},{"id":"deb83b68-0da2-4d17-bf34-87b29c0d7cbf","type":"LinearAxis"},{"id":"5f73b720-9702-41ee-9ea6-02bd2ddf4986","type":"LinearAxis"},{"id":"540f7831-024a-4711-a866-c0be5d4eb365","type":"Grid"},{"id":"33b1b4fd-b361-4bbf-aabe-93b789089e5d","type":"Grid"}],"title":null,"tool_events":{"id":"84c85d47-b290-42f1-8040-abec036d15a9","type":"ToolEvents"},"toolbar":{"id":"b2a89294-c5d1-4017-af7c-a59f8f933b22","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"74991f1d-e028-4f4c-ace4-98e5bc70c8e1","type":"DataRange1d"},"y_range":{"id":"e73eda6c-d76a-496c-968d-6b1a110223bb","type":"DataRange1d"}},"id":"f20a7114-cfe4-4143-af4f-7d6fa4ca5796","type":"Plot"},{"attributes":{},"id":"d3255d89-aacd-4a08-a5a4-1f541397dbe6","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"08897059-0fcf-4894-8f93-109aca511d2c","type":"X"},{"attributes":{"callback":null},"id":"e73eda6c-d76a-496c-968d-6b1a110223bb","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"f20a7114-cfe4-4143-af4f-7d6fa4ca5796","type":"Plot"},"ticker":{"id":"0191c290-4490-43dc-8e3d-37f2fddede85","type":"BasicTicker"}},"id":"33b1b4fd-b361-4bbf-aabe-93b789089e5d","type":"Grid"},{"attributes":{},"id":"26ed6e02-bf5b-4a8d-a00a-d54164d331c3","type":"BasicTicker"}],"root_ids":["f20a7114-cfe4-4143-af4f-7d6fa4ca5796"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"e083c137-bbc4-440a-bec5-fc3e98f1e602","elementid":"b161f5ec-b234-4707-ad12-2ab714e71420","modelid":"f20a7114-cfe4-4143-af4f-7d6fa4ca5796"}];
                  
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