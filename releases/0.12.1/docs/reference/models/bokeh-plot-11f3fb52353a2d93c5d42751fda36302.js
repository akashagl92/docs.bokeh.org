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
      };var element = document.getElementById("19c791cb-a3ef-4c02-acfc-4c8d989f9255");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '19c791cb-a3ef-4c02-acfc-4c8d989f9255' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"4e3b72d0-1b65-4c79-aff8-a44eb885b163":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"aebe034e-76d2-445c-9007-cbc9c20dc220","type":"Plot"},"ticker":{"id":"341f4b81-ac7a-41e6-b4c0-aa0f55f385c7","type":"BasicTicker"}},"id":"7e5629f2-c529-474f-a3bf-13126d56661c","type":"Grid"},{"attributes":{},"id":"392d3fb8-85ef-47ea-a8d4-abfa1d8f2aae","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a262ede2-7aa8-4a54-af39-b0b4d493ef1e","type":"X"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ed94477d-8892-4e7a-bd67-f492972e699b","type":"Toolbar"},{"attributes":{"data_source":{"id":"8d098b93-cb81-4180-9fd5-290158a25328","type":"ColumnDataSource"},"glyph":{"id":"a262ede2-7aa8-4a54-af39-b0b4d493ef1e","type":"X"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9910a9fc-4fb9-4f6c-bd9d-e2c6d432a436","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"e38d2b95-62a5-4b08-b15b-fc55fa70b070","type":"BasicTickFormatter"},"plot":{"id":"aebe034e-76d2-445c-9007-cbc9c20dc220","type":"Plot"},"ticker":{"id":"518e4b87-7802-436e-81cb-463b082791ec","type":"BasicTicker"}},"id":"b0415f92-2c13-4a7f-8b57-83ef0eceff06","type":"LinearAxis"},{"attributes":{},"id":"e38d2b95-62a5-4b08-b15b-fc55fa70b070","type":"BasicTickFormatter"},{"attributes":{},"id":"518e4b87-7802-436e-81cb-463b082791ec","type":"BasicTicker"},{"attributes":{},"id":"7e9370dc-60ba-456b-b646-95af11f9408d","type":"ToolEvents"},{"attributes":{"plot":{"id":"aebe034e-76d2-445c-9007-cbc9c20dc220","type":"Plot"},"ticker":{"id":"518e4b87-7802-436e-81cb-463b082791ec","type":"BasicTicker"}},"id":"8619d2bf-6562-46bc-8003-f9a2db6bd9e4","type":"Grid"},{"attributes":{"callback":null},"id":"3418ab2d-8f93-4848-a239-89e5f82a9a8d","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"8d098b93-cb81-4180-9fd5-290158a25328","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"392d3fb8-85ef-47ea-a8d4-abfa1d8f2aae","type":"BasicTickFormatter"},"plot":{"id":"aebe034e-76d2-445c-9007-cbc9c20dc220","type":"Plot"},"ticker":{"id":"341f4b81-ac7a-41e6-b4c0-aa0f55f385c7","type":"BasicTicker"}},"id":"df7f1f9c-9c99-4d7a-8096-7bbba339a863","type":"LinearAxis"},{"attributes":{"below":[{"id":"b0415f92-2c13-4a7f-8b57-83ef0eceff06","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"df7f1f9c-9c99-4d7a-8096-7bbba339a863","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9910a9fc-4fb9-4f6c-bd9d-e2c6d432a436","type":"GlyphRenderer"},{"id":"b0415f92-2c13-4a7f-8b57-83ef0eceff06","type":"LinearAxis"},{"id":"df7f1f9c-9c99-4d7a-8096-7bbba339a863","type":"LinearAxis"},{"id":"8619d2bf-6562-46bc-8003-f9a2db6bd9e4","type":"Grid"},{"id":"7e5629f2-c529-474f-a3bf-13126d56661c","type":"Grid"}],"title":null,"tool_events":{"id":"7e9370dc-60ba-456b-b646-95af11f9408d","type":"ToolEvents"},"toolbar":{"id":"ed94477d-8892-4e7a-bd67-f492972e699b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ab587026-f7a0-42de-986a-374de777c1c0","type":"DataRange1d"},"y_range":{"id":"3418ab2d-8f93-4848-a239-89e5f82a9a8d","type":"DataRange1d"}},"id":"aebe034e-76d2-445c-9007-cbc9c20dc220","type":"Plot"},{"attributes":{"callback":null},"id":"ab587026-f7a0-42de-986a-374de777c1c0","type":"DataRange1d"},{"attributes":{},"id":"341f4b81-ac7a-41e6-b4c0-aa0f55f385c7","type":"BasicTicker"}],"root_ids":["aebe034e-76d2-445c-9007-cbc9c20dc220"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"4e3b72d0-1b65-4c79-aff8-a44eb885b163","elementid":"19c791cb-a3ef-4c02-acfc-4c8d989f9255","modelid":"aebe034e-76d2-445c-9007-cbc9c20dc220"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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