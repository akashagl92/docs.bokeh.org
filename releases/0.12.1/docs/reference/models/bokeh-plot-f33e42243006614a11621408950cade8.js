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
      };var element = document.getElementById("20274804-fbd7-4fcf-94a3-e33267a31b25");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '20274804-fbd7-4fcf-94a3-e33267a31b25' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"edbd7ed7-5f6d-4fab-ab15-2063f6260f2d":{"roots":{"references":[{"attributes":{},"id":"0c3d0c8a-f3e3-4b5c-b5bf-9860b1af27bd","type":"BasicTicker"},{"attributes":{"formatter":{"id":"629acbc6-6adb-4c6c-b42a-d9049cd89319","type":"BasicTickFormatter"},"plot":{"id":"4027162a-2bd9-49e4-836f-e644892db60d","type":"Plot"},"ticker":{"id":"0c3d0c8a-f3e3-4b5c-b5bf-9860b1af27bd","type":"BasicTicker"}},"id":"3ef25d05-3007-4fb3-b10d-11dc45874c7d","type":"LinearAxis"},{"attributes":{"below":[{"id":"3ef25d05-3007-4fb3-b10d-11dc45874c7d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f686dc5a-4d6b-428a-bfee-65beada8b1e2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a0939209-821b-4fa1-a79d-e44d9807e234","type":"GlyphRenderer"},{"id":"3ef25d05-3007-4fb3-b10d-11dc45874c7d","type":"LinearAxis"},{"id":"f686dc5a-4d6b-428a-bfee-65beada8b1e2","type":"LinearAxis"},{"id":"1c3b0e52-b102-48ad-8e88-7e0eef4cd93b","type":"Grid"},{"id":"80599cf8-038d-4486-a200-6b323abc117d","type":"Grid"}],"title":null,"tool_events":{"id":"d19559a4-791d-4478-8265-7b2116d19318","type":"ToolEvents"},"toolbar":{"id":"812e653e-c8c6-4e31-b1bf-832bd609da8e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8ea68c05-be96-49d2-848a-40227b1c1bf4","type":"DataRange1d"},"y_range":{"id":"0ab15ca4-7c11-4ddb-97a6-fbc9b202fabb","type":"DataRange1d"}},"id":"4027162a-2bd9-49e4-836f-e644892db60d","type":"Plot"},{"attributes":{"callback":null},"id":"0ab15ca4-7c11-4ddb-97a6-fbc9b202fabb","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a66a57ac-dc90-436b-b503-a2742b408a5b","type":"Cross"},{"attributes":{"formatter":{"id":"a6dcece6-216d-4c48-9328-52b878996851","type":"BasicTickFormatter"},"plot":{"id":"4027162a-2bd9-49e4-836f-e644892db60d","type":"Plot"},"ticker":{"id":"b3f916e1-f4ef-4e1c-b84e-64f76199046b","type":"BasicTicker"}},"id":"f686dc5a-4d6b-428a-bfee-65beada8b1e2","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"4027162a-2bd9-49e4-836f-e644892db60d","type":"Plot"},"ticker":{"id":"b3f916e1-f4ef-4e1c-b84e-64f76199046b","type":"BasicTicker"}},"id":"80599cf8-038d-4486-a200-6b323abc117d","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"812e653e-c8c6-4e31-b1bf-832bd609da8e","type":"Toolbar"},{"attributes":{},"id":"a6dcece6-216d-4c48-9328-52b878996851","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8ea68c05-be96-49d2-848a-40227b1c1bf4","type":"DataRange1d"},{"attributes":{"plot":{"id":"4027162a-2bd9-49e4-836f-e644892db60d","type":"Plot"},"ticker":{"id":"0c3d0c8a-f3e3-4b5c-b5bf-9860b1af27bd","type":"BasicTicker"}},"id":"1c3b0e52-b102-48ad-8e88-7e0eef4cd93b","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"19185d4f-0287-41e8-b7fd-9d43c77a1141","type":"ColumnDataSource"},{"attributes":{},"id":"b3f916e1-f4ef-4e1c-b84e-64f76199046b","type":"BasicTicker"},{"attributes":{},"id":"629acbc6-6adb-4c6c-b42a-d9049cd89319","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"19185d4f-0287-41e8-b7fd-9d43c77a1141","type":"ColumnDataSource"},"glyph":{"id":"a66a57ac-dc90-436b-b503-a2742b408a5b","type":"Cross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a0939209-821b-4fa1-a79d-e44d9807e234","type":"GlyphRenderer"},{"attributes":{},"id":"d19559a4-791d-4478-8265-7b2116d19318","type":"ToolEvents"}],"root_ids":["4027162a-2bd9-49e4-836f-e644892db60d"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"edbd7ed7-5f6d-4fab-ab15-2063f6260f2d","elementid":"20274804-fbd7-4fcf-94a3-e33267a31b25","modelid":"4027162a-2bd9-49e4-836f-e644892db60d"}];
              
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