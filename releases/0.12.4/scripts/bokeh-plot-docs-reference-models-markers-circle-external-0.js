(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("0a75f860-4e2e-4cf7-8095-028765d1cec2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0a75f860-4e2e-4cf7-8095-028765d1cec2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"d1e0846b-75ad-497c-a3e6-bdb3f91ddd9f":{"roots":{"references":[{"attributes":{"data_source":{"id":"3ffb5c34-ddf2-42a6-9783-477fcea030ce","type":"ColumnDataSource"},"glyph":{"id":"00dedab9-7ded-4146-8c2a-a5450766bf65","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a97f4a30-aab4-41ce-b19c-f8bf19e2307b","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"0bf1d218-955d-480a-b961-779dc9134429","type":"BasicTickFormatter"},"plot":{"id":"fdae036b-72ac-4f12-961f-dd4500f2c83b","type":"Plot"},"ticker":{"id":"bfbda7f9-1c1b-4276-bb24-c610d3ab94ab","type":"BasicTicker"}},"id":"541cfd77-684b-4125-8c0a-0db28f3ca0ed","type":"LinearAxis"},{"attributes":{"plot":{"id":"fdae036b-72ac-4f12-961f-dd4500f2c83b","type":"Plot"},"ticker":{"id":"7e8d6dc6-09ac-4947-9562-e7e9f064dca7","type":"BasicTicker"}},"id":"ff486aa7-a34c-4a82-82bb-f8f3f0bbcd67","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5a37c692-0fb9-4e56-9cca-650d6321145b","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"3ffb5c34-ddf2-42a6-9783-477fcea030ce","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"d9bb0211-ee44-412e-be06-0d5c60f555b1","type":"BasicTickFormatter"},"plot":{"id":"fdae036b-72ac-4f12-961f-dd4500f2c83b","type":"Plot"},"ticker":{"id":"7e8d6dc6-09ac-4947-9562-e7e9f064dca7","type":"BasicTicker"}},"id":"4df4d897-b04e-404c-bfde-5a7f2b8fab61","type":"LinearAxis"},{"attributes":{},"id":"aa858c03-e65e-465a-8b78-dedc8b93dad9","type":"ToolEvents"},{"attributes":{"callback":null},"id":"98ead3c3-d7a1-4e7b-90b9-1765493d9090","type":"DataRange1d"},{"attributes":{"below":[{"id":"4df4d897-b04e-404c-bfde-5a7f2b8fab61","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"541cfd77-684b-4125-8c0a-0db28f3ca0ed","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a97f4a30-aab4-41ce-b19c-f8bf19e2307b","type":"GlyphRenderer"},{"id":"4df4d897-b04e-404c-bfde-5a7f2b8fab61","type":"LinearAxis"},{"id":"541cfd77-684b-4125-8c0a-0db28f3ca0ed","type":"LinearAxis"},{"id":"ff486aa7-a34c-4a82-82bb-f8f3f0bbcd67","type":"Grid"},{"id":"ee6933e8-e67e-4876-b2ab-73f000b4a339","type":"Grid"}],"title":null,"tool_events":{"id":"aa858c03-e65e-465a-8b78-dedc8b93dad9","type":"ToolEvents"},"toolbar":{"id":"5a37c692-0fb9-4e56-9cca-650d6321145b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"98ead3c3-d7a1-4e7b-90b9-1765493d9090","type":"DataRange1d"},"y_range":{"id":"7f73bbed-c385-481e-9659-1b3e0e1bf4f8","type":"DataRange1d"}},"id":"fdae036b-72ac-4f12-961f-dd4500f2c83b","type":"Plot"},{"attributes":{},"id":"bfbda7f9-1c1b-4276-bb24-c610d3ab94ab","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"fdae036b-72ac-4f12-961f-dd4500f2c83b","type":"Plot"},"ticker":{"id":"bfbda7f9-1c1b-4276-bb24-c610d3ab94ab","type":"BasicTicker"}},"id":"ee6933e8-e67e-4876-b2ab-73f000b4a339","type":"Grid"},{"attributes":{},"id":"7e8d6dc6-09ac-4947-9562-e7e9f064dca7","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288Bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"00dedab9-7ded-4146-8c2a-a5450766bf65","type":"Circle"},{"attributes":{"callback":null},"id":"7f73bbed-c385-481e-9659-1b3e0e1bf4f8","type":"DataRange1d"},{"attributes":{},"id":"0bf1d218-955d-480a-b961-779dc9134429","type":"BasicTickFormatter"},{"attributes":{},"id":"d9bb0211-ee44-412e-be06-0d5c60f555b1","type":"BasicTickFormatter"}],"root_ids":["fdae036b-72ac-4f12-961f-dd4500f2c83b"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"d1e0846b-75ad-497c-a3e6-bdb3f91ddd9f","elementid":"0a75f860-4e2e-4cf7-8095-028765d1cec2","modelid":"fdae036b-72ac-4f12-961f-dd4500f2c83b"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
