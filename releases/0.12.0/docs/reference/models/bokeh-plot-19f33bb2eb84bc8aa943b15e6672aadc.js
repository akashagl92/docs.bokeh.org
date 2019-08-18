document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("a381148c-8a39-42e2-abd8-cd2c88f88c40");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a381148c-8a39-42e2-abd8-cd2c88f88c40' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"92910fe1-5c41-4d9c-97a1-ef7d9a4fb721":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"a4fd24c4-690b-4cdb-945b-6c5fff680cc4","type":"Plot"},"ticker":{"id":"5f3613e2-d79d-4ba0-ad4c-ee1ac10b3d29","type":"BasicTicker"}},"id":"307c1792-89b8-42ef-a778-a3f759ce879e","type":"Grid"},{"attributes":{},"id":"0bca6b10-fc1d-42f6-9f42-4d346ca8136c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"a5fca3e5-a6ec-422a-adc5-518fe2c42348","type":"DataRange1d"},{"attributes":{},"id":"33b695e8-4283-47b9-a446-3cd0592dda75","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d407476b-ca39-4899-89b5-aa3ea8f5eb0f","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#99d594"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"98188db2-8ec1-4438-873d-0f6278eefd4e","type":"Triangle"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"951b01d4-4526-47bd-88e2-ff86f2b85663","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"951b01d4-4526-47bd-88e2-ff86f2b85663","type":"ColumnDataSource"},"glyph":{"id":"98188db2-8ec1-4438-873d-0f6278eefd4e","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dea92456-a7fe-4841-a810-d62d5068cbf7","type":"GlyphRenderer"},{"attributes":{},"id":"b200a61e-1c69-47bd-b800-29f4f28fda98","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c0dc7de1-1c7c-4fe4-9af0-23d3200d109d","type":"Toolbar"},{"attributes":{"plot":{"id":"a4fd24c4-690b-4cdb-945b-6c5fff680cc4","type":"Plot"},"ticker":{"id":"33b695e8-4283-47b9-a446-3cd0592dda75","type":"BasicTicker"}},"id":"ca7ceafa-a993-4b59-b6d9-a4bde63817c7","type":"Grid"},{"attributes":{},"id":"5f3613e2-d79d-4ba0-ad4c-ee1ac10b3d29","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b200a61e-1c69-47bd-b800-29f4f28fda98","type":"BasicTickFormatter"},"plot":{"id":"a4fd24c4-690b-4cdb-945b-6c5fff680cc4","type":"Plot"},"ticker":{"id":"5f3613e2-d79d-4ba0-ad4c-ee1ac10b3d29","type":"BasicTicker"}},"id":"778c374c-0f81-4c19-8052-28b4906372b0","type":"LinearAxis"},{"attributes":{},"id":"5f94a6c2-758a-48f0-bd0e-d85b8fde1fd6","type":"ToolEvents"},{"attributes":{"below":[{"id":"3cae02b4-241b-4aea-8261-5ac8843855f8","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"778c374c-0f81-4c19-8052-28b4906372b0","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"dea92456-a7fe-4841-a810-d62d5068cbf7","type":"GlyphRenderer"},{"id":"3cae02b4-241b-4aea-8261-5ac8843855f8","type":"LinearAxis"},{"id":"778c374c-0f81-4c19-8052-28b4906372b0","type":"LinearAxis"},{"id":"ca7ceafa-a993-4b59-b6d9-a4bde63817c7","type":"Grid"},{"id":"307c1792-89b8-42ef-a778-a3f759ce879e","type":"Grid"}],"title":null,"tool_events":{"id":"5f94a6c2-758a-48f0-bd0e-d85b8fde1fd6","type":"ToolEvents"},"toolbar":{"id":"c0dc7de1-1c7c-4fe4-9af0-23d3200d109d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a5fca3e5-a6ec-422a-adc5-518fe2c42348","type":"DataRange1d"},"y_range":{"id":"d407476b-ca39-4899-89b5-aa3ea8f5eb0f","type":"DataRange1d"}},"id":"a4fd24c4-690b-4cdb-945b-6c5fff680cc4","type":"Plot"},{"attributes":{"formatter":{"id":"0bca6b10-fc1d-42f6-9f42-4d346ca8136c","type":"BasicTickFormatter"},"plot":{"id":"a4fd24c4-690b-4cdb-945b-6c5fff680cc4","type":"Plot"},"ticker":{"id":"33b695e8-4283-47b9-a446-3cd0592dda75","type":"BasicTicker"}},"id":"3cae02b4-241b-4aea-8261-5ac8843855f8","type":"LinearAxis"}],"root_ids":["a4fd24c4-690b-4cdb-945b-6c5fff680cc4"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"92910fe1-5c41-4d9c-97a1-ef7d9a4fb721","elementid":"a381148c-8a39-42e2-abd8-cd2c88f88c40","modelid":"a4fd24c4-690b-4cdb-945b-6c5fff680cc4"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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