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
      };var element = document.getElementById("c9302d5c-05f2-4ddc-ba43-b65dd9e114e9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c9302d5c-05f2-4ddc-ba43-b65dd9e114e9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"c4d85039-289f-472b-ac93-c4abb8fc7f78":{"roots":{"references":[{"attributes":{"callback":null},"id":"db88c323-4dc9-410d-922b-753d72cbe9c1","type":"DataRange1d"},{"attributes":{"formatter":{"id":"c96bdf0c-e7bd-47d2-b60f-0a1cce065123","type":"BasicTickFormatter"},"plot":{"id":"ec9a0a66-689c-481b-8805-c51f0e9796ab","type":"Plot"},"ticker":{"id":"82daf42e-9ace-4187-afb3-5a674e31b572","type":"BasicTicker"}},"id":"2c9ec6e3-b38c-47ed-9a10-0bdc648fe4c0","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"a37e7731-c9f7-4a6e-a353-4bfe92ece365","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"6444119d-85d6-4b55-916c-836773c87e83","type":"BasicTickFormatter"},"plot":{"id":"ec9a0a66-689c-481b-8805-c51f0e9796ab","type":"Plot"},"ticker":{"id":"d8206755-aaec-41fe-81b0-1e53bcbb8613","type":"BasicTicker"}},"id":"49d79661-953e-4306-8aba-ccc6b3e9f7f6","type":"LinearAxis"},{"attributes":{},"id":"2c6f5b6c-d8c9-4267-be6b-99cdca38b56f","type":"ToolEvents"},{"attributes":{},"id":"d8206755-aaec-41fe-81b0-1e53bcbb8613","type":"BasicTicker"},{"attributes":{},"id":"82daf42e-9ace-4187-afb3-5a674e31b572","type":"BasicTicker"},{"attributes":{"below":[{"id":"49d79661-953e-4306-8aba-ccc6b3e9f7f6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2c9ec6e3-b38c-47ed-9a10-0bdc648fe4c0","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3bb9b57d-236f-4140-93ab-b6a16a40e87b","type":"GlyphRenderer"},{"id":"49d79661-953e-4306-8aba-ccc6b3e9f7f6","type":"LinearAxis"},{"id":"2c9ec6e3-b38c-47ed-9a10-0bdc648fe4c0","type":"LinearAxis"},{"id":"85221848-df0c-4a45-bde9-169c76eb6b92","type":"Grid"},{"id":"60b4c56c-641f-4270-91ef-9f3be4b0eb66","type":"Grid"}],"title":null,"tool_events":{"id":"2c6f5b6c-d8c9-4267-be6b-99cdca38b56f","type":"ToolEvents"},"toolbar":{"id":"2b48a6ed-463e-48ee-a484-12d95e1cb3d4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"142c0d6b-36ca-4f3b-9c4f-cfaa8077551f","type":"DataRange1d"},"y_range":{"id":"db88c323-4dc9-410d-922b-753d72cbe9c1","type":"DataRange1d"}},"id":"ec9a0a66-689c-481b-8805-c51f0e9796ab","type":"Plot"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7fc97f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"48e3ab0b-450c-406e-b26e-6a2d94ebd8de","type":"SquareCross"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2b48a6ed-463e-48ee-a484-12d95e1cb3d4","type":"Toolbar"},{"attributes":{},"id":"c96bdf0c-e7bd-47d2-b60f-0a1cce065123","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"142c0d6b-36ca-4f3b-9c4f-cfaa8077551f","type":"DataRange1d"},{"attributes":{},"id":"6444119d-85d6-4b55-916c-836773c87e83","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ec9a0a66-689c-481b-8805-c51f0e9796ab","type":"Plot"},"ticker":{"id":"d8206755-aaec-41fe-81b0-1e53bcbb8613","type":"BasicTicker"}},"id":"85221848-df0c-4a45-bde9-169c76eb6b92","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"ec9a0a66-689c-481b-8805-c51f0e9796ab","type":"Plot"},"ticker":{"id":"82daf42e-9ace-4187-afb3-5a674e31b572","type":"BasicTicker"}},"id":"60b4c56c-641f-4270-91ef-9f3be4b0eb66","type":"Grid"},{"attributes":{"data_source":{"id":"a37e7731-c9f7-4a6e-a353-4bfe92ece365","type":"ColumnDataSource"},"glyph":{"id":"48e3ab0b-450c-406e-b26e-6a2d94ebd8de","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3bb9b57d-236f-4140-93ab-b6a16a40e87b","type":"GlyphRenderer"}],"root_ids":["ec9a0a66-689c-481b-8805-c51f0e9796ab"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"c4d85039-289f-472b-ac93-c4abb8fc7f78","elementid":"c9302d5c-05f2-4ddc-ba43-b65dd9e114e9","modelid":"ec9a0a66-689c-481b-8805-c51f0e9796ab"}];
              
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