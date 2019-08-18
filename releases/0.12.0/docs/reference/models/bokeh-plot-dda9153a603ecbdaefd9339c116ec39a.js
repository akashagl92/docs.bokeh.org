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
      };var element = document.getElementById("5f2ca5ae-e12d-45ed-9c9d-df13785fcaab");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5f2ca5ae-e12d-45ed-9c9d-df13785fcaab' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"e2a172ef-4e94-4a9d-8dcb-5d8856b6e71a":{"roots":{"references":[{"attributes":{},"id":"d70c31b3-88c4-40ce-aca9-933426a5a901","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c45824d-5482-44a4-ba5a-96597428ef57","type":"Text"},{"attributes":{"below":[{"id":"d6299f57-710d-48fc-bcf4-06bb9a7deb46","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"5d1c9cb9-2771-4e62-ac21-8eb05c39f2e9","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4329e8db-cf88-4cf1-a844-ba1b2bf1f517","type":"GlyphRenderer"},{"id":"d6299f57-710d-48fc-bcf4-06bb9a7deb46","type":"LinearAxis"},{"id":"5d1c9cb9-2771-4e62-ac21-8eb05c39f2e9","type":"LinearAxis"},{"id":"4d20b903-b85b-43ca-aa6d-62e3e935f6cc","type":"Grid"},{"id":"a9290715-0e8c-4c60-862a-e50ada9f0cb1","type":"Grid"}],"title":null,"tool_events":{"id":"712635ed-d30b-47d8-b0e5-48fb5ecebf09","type":"ToolEvents"},"toolbar":{"id":"4d8fbad0-6acf-4121-a0ad-9a70614bb64a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d446d4e1-7685-47b9-bc0b-5e0e5bf2c5f6","type":"DataRange1d"},"y_range":{"id":"16d1695e-a2d5-4dd2-b4ba-de4685833f6d","type":"DataRange1d"}},"id":"cdc6f3c0-1542-4e51-9330-ecfb0714925c","type":"Plot"},{"attributes":{"callback":null},"id":"d446d4e1-7685-47b9-bc0b-5e0e5bf2c5f6","type":"DataRange1d"},{"attributes":{"formatter":{"id":"6c051d32-521f-464b-9263-d477a3f0c996","type":"BasicTickFormatter"},"plot":{"id":"cdc6f3c0-1542-4e51-9330-ecfb0714925c","type":"Plot"},"ticker":{"id":"d70c31b3-88c4-40ce-aca9-933426a5a901","type":"BasicTicker"}},"id":"d6299f57-710d-48fc-bcf4-06bb9a7deb46","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4d8fbad0-6acf-4121-a0ad-9a70614bb64a","type":"Toolbar"},{"attributes":{},"id":"c1bb78e9-e8c6-4606-ae48-125cecadbc5f","type":"BasicTicker"},{"attributes":{"plot":{"id":"cdc6f3c0-1542-4e51-9330-ecfb0714925c","type":"Plot"},"ticker":{"id":"d70c31b3-88c4-40ce-aca9-933426a5a901","type":"BasicTicker"}},"id":"4d20b903-b85b-43ca-aa6d-62e3e935f6cc","type":"Grid"},{"attributes":{},"id":"6c051d32-521f-464b-9263-d477a3f0c996","type":"BasicTickFormatter"},{"attributes":{},"id":"bedecdc7-c31f-42dd-9930-f4eb1558757c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"16d1695e-a2d5-4dd2-b4ba-de4685833f6d","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"cdc6f3c0-1542-4e51-9330-ecfb0714925c","type":"Plot"},"ticker":{"id":"c1bb78e9-e8c6-4606-ae48-125cecadbc5f","type":"BasicTicker"}},"id":"a9290715-0e8c-4c60-862a-e50ada9f0cb1","type":"Grid"},{"attributes":{},"id":"712635ed-d30b-47d8-b0e5-48fb5ecebf09","type":"ToolEvents"},{"attributes":{"data_source":{"id":"4cadc9a2-16da-4fb0-90b5-4e0bc18a14be","type":"ColumnDataSource"},"glyph":{"id":"2c45824d-5482-44a4-ba5a-96597428ef57","type":"Text"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4329e8db-cf88-4cf1-a844-ba1b2bf1f517","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","text","x"],"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"4cadc9a2-16da-4fb0-90b5-4e0bc18a14be","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"bedecdc7-c31f-42dd-9930-f4eb1558757c","type":"BasicTickFormatter"},"plot":{"id":"cdc6f3c0-1542-4e51-9330-ecfb0714925c","type":"Plot"},"ticker":{"id":"c1bb78e9-e8c6-4606-ae48-125cecadbc5f","type":"BasicTicker"}},"id":"5d1c9cb9-2771-4e62-ac21-8eb05c39f2e9","type":"LinearAxis"}],"root_ids":["cdc6f3c0-1542-4e51-9330-ecfb0714925c"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"e2a172ef-4e94-4a9d-8dcb-5d8856b6e71a","elementid":"5f2ca5ae-e12d-45ed-9c9d-df13785fcaab","modelid":"cdc6f3c0-1542-4e51-9330-ecfb0714925c"}];
              
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