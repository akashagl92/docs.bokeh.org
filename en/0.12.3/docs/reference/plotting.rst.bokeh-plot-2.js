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
      };var element = document.getElementById("bb27ca49-c88d-4e7b-9070-b92d2cc3009e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb27ca49-c88d-4e7b-9070-b92d2cc3009e' but no matching script tag was found. ")
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
                  var docs_json = {"b0a2d6b0-0307-4331-921e-10e934bec11b":{"roots":{"references":[{"attributes":{"formatter":{"id":"a211fa08-7f18-47e5-868b-7b6c5d4cc521","type":"BasicTickFormatter"},"plot":{"id":"106f83d8-28a2-43e0-9b98-f030ff40c4ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"b7167759-fbe8-4fc7-a83c-de13e598aab6","type":"BasicTicker"}},"id":"eba11a81-bfb0-4bb2-8d1a-cfa73997fe37","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c38c5ef7-1416-4d4c-974e-80d9ea90976b","type":"PanTool"},{"id":"1dfb03ae-5a78-4667-a8f9-d35ab0d869cd","type":"WheelZoomTool"},{"id":"46b714e1-1e1c-43db-944e-dfa9cc275112","type":"BoxZoomTool"},{"id":"3f56d73f-964a-499a-b58a-768aaed530b0","type":"SaveTool"},{"id":"8620a000-1cba-4430-9316-6d637f46479d","type":"ResetTool"},{"id":"76faabfc-e86f-4086-8734-d4327581cc75","type":"HelpTool"}]},"id":"684110d1-b6e1-49ff-9781-382882b30b4b","type":"Toolbar"},{"attributes":{"callback":null},"id":"f56c43d4-aa4b-4586-8b5e-e2f9c3a7feea","type":"DataRange1d"},{"attributes":{"below":[{"id":"c653a9e1-bff2-4fa1-bf8e-71215df2b09b","type":"LinearAxis"}],"left":[{"id":"eba11a81-bfb0-4bb2-8d1a-cfa73997fe37","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c653a9e1-bff2-4fa1-bf8e-71215df2b09b","type":"LinearAxis"},{"id":"85fb3023-2cc0-44cf-96ca-32eb520d3e39","type":"Grid"},{"id":"eba11a81-bfb0-4bb2-8d1a-cfa73997fe37","type":"LinearAxis"},{"id":"0da6e9ba-3bf8-418c-a3f9-1d0d9c4fb2bf","type":"Grid"},{"id":"401ce164-d2ab-4946-bb7a-3292a959dfa8","type":"BoxAnnotation"},{"id":"d9c0f5b4-272b-4678-85e1-8ebeec12141f","type":"GlyphRenderer"}],"title":{"id":"17081b5e-943f-4236-b28a-b80b275a7c90","type":"Title"},"tool_events":{"id":"f3cd2aa3-7b82-4c2a-b1c4-d12e6497165a","type":"ToolEvents"},"toolbar":{"id":"684110d1-b6e1-49ff-9781-382882b30b4b","type":"Toolbar"},"x_range":{"id":"f56c43d4-aa4b-4586-8b5e-e2f9c3a7feea","type":"DataRange1d"},"y_range":{"id":"5129be9d-1fb2-436c-923d-2da6e0e4b65c","type":"DataRange1d"}},"id":"106f83d8-28a2-43e0-9b98-f030ff40c4ae","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a211fa08-7f18-47e5-868b-7b6c5d4cc521","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"106f83d8-28a2-43e0-9b98-f030ff40c4ae","subtype":"Figure","type":"Plot"}},"id":"1dfb03ae-5a78-4667-a8f9-d35ab0d869cd","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"17081b5e-943f-4236-b28a-b80b275a7c90","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"52b8bc6f-f530-4d76-b0f6-b4ec1dc31e99","type":"Circle"},{"attributes":{"plot":{"id":"106f83d8-28a2-43e0-9b98-f030ff40c4ae","subtype":"Figure","type":"Plot"}},"id":"3f56d73f-964a-499a-b58a-768aaed530b0","type":"SaveTool"},{"attributes":{"overlay":{"id":"401ce164-d2ab-4946-bb7a-3292a959dfa8","type":"BoxAnnotation"},"plot":{"id":"106f83d8-28a2-43e0-9b98-f030ff40c4ae","subtype":"Figure","type":"Plot"}},"id":"46b714e1-1e1c-43db-944e-dfa9cc275112","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"106f83d8-28a2-43e0-9b98-f030ff40c4ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f0536a0-9227-4e65-bb15-0d1ce2453c04","type":"BasicTicker"}},"id":"85fb3023-2cc0-44cf-96ca-32eb520d3e39","type":"Grid"},{"attributes":{"callback":null},"id":"5129be9d-1fb2-436c-923d-2da6e0e4b65c","type":"DataRange1d"},{"attributes":{},"id":"b7167759-fbe8-4fc7-a83c-de13e598aab6","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"401ce164-d2ab-4946-bb7a-3292a959dfa8","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"106f83d8-28a2-43e0-9b98-f030ff40c4ae","subtype":"Figure","type":"Plot"}},"id":"76faabfc-e86f-4086-8734-d4327581cc75","type":"HelpTool"},{"attributes":{"data_source":{"id":"954c668e-7a70-4154-af52-33d2008deca4","type":"ColumnDataSource"},"glyph":{"id":"21b36430-8a1e-4807-b713-37988a1a9d7d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"52b8bc6f-f530-4d76-b0f6-b4ec1dc31e99","type":"Circle"},"selection_glyph":null},"id":"d9c0f5b4-272b-4678-85e1-8ebeec12141f","type":"GlyphRenderer"},{"attributes":{},"id":"3f0536a0-9227-4e65-bb15-0d1ce2453c04","type":"BasicTicker"},{"attributes":{},"id":"161614f8-ac6d-43ec-a2d1-7556c8dc41f4","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"954c668e-7a70-4154-af52-33d2008deca4","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"106f83d8-28a2-43e0-9b98-f030ff40c4ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"b7167759-fbe8-4fc7-a83c-de13e598aab6","type":"BasicTicker"}},"id":"0da6e9ba-3bf8-418c-a3f9-1d0d9c4fb2bf","type":"Grid"},{"attributes":{"plot":{"id":"106f83d8-28a2-43e0-9b98-f030ff40c4ae","subtype":"Figure","type":"Plot"}},"id":"c38c5ef7-1416-4d4c-974e-80d9ea90976b","type":"PanTool"},{"attributes":{"formatter":{"id":"161614f8-ac6d-43ec-a2d1-7556c8dc41f4","type":"BasicTickFormatter"},"plot":{"id":"106f83d8-28a2-43e0-9b98-f030ff40c4ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f0536a0-9227-4e65-bb15-0d1ce2453c04","type":"BasicTicker"}},"id":"c653a9e1-bff2-4fa1-bf8e-71215df2b09b","type":"LinearAxis"},{"attributes":{},"id":"f3cd2aa3-7b82-4c2a-b1c4-d12e6497165a","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"21b36430-8a1e-4807-b713-37988a1a9d7d","type":"Circle"},{"attributes":{"plot":{"id":"106f83d8-28a2-43e0-9b98-f030ff40c4ae","subtype":"Figure","type":"Plot"}},"id":"8620a000-1cba-4430-9316-6d637f46479d","type":"ResetTool"}],"root_ids":["106f83d8-28a2-43e0-9b98-f030ff40c4ae"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"b0a2d6b0-0307-4331-921e-10e934bec11b","elementid":"bb27ca49-c88d-4e7b-9070-b92d2cc3009e","modelid":"106f83d8-28a2-43e0-9b98-f030ff40c4ae"}];
                  
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