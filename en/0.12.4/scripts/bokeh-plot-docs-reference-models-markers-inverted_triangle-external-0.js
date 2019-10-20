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
      };var element = document.getElementById("80d6ca59-addf-4679-90e3-00d94a6869b8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '80d6ca59-addf-4679-90e3-00d94a6869b8' but no matching script tag was found. ")
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
                var docs_json = {"8e76b966-4c61-4995-9a35-22fdade9af61":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"2b3b1449-df27-4273-9856-11251a317ca4","type":"Plot"},"ticker":{"id":"f2bc1edb-79c4-4969-8572-8d845370c93e","type":"BasicTicker"}},"id":"8e909d35-288e-4b47-bfd4-bd62d2951fb9","type":"Grid"},{"attributes":{"formatter":{"id":"4fdb1196-9e75-4a2b-923a-6418feab0fc3","type":"BasicTickFormatter"},"plot":{"id":"2b3b1449-df27-4273-9856-11251a317ca4","type":"Plot"},"ticker":{"id":"f2bc1edb-79c4-4969-8572-8d845370c93e","type":"BasicTicker"}},"id":"d5d2a115-815b-4163-a311-1af94f57e070","type":"LinearAxis"},{"attributes":{},"id":"4fdb1196-9e75-4a2b-923a-6418feab0fc3","type":"BasicTickFormatter"},{"attributes":{},"id":"01512c87-a98d-45e3-8819-9f55eca01587","type":"BasicTickFormatter"},{"attributes":{},"id":"b5e02447-301c-4779-aee5-50dec86d90e1","type":"ToolEvents"},{"attributes":{"below":[{"id":"c55973d6-7910-433c-9058-f74ba663ae89","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d5d2a115-815b-4163-a311-1af94f57e070","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"519a17ac-875d-4a4c-aaf9-c018e2b7f161","type":"GlyphRenderer"},{"id":"c55973d6-7910-433c-9058-f74ba663ae89","type":"LinearAxis"},{"id":"d5d2a115-815b-4163-a311-1af94f57e070","type":"LinearAxis"},{"id":"d1c50066-6e5b-4692-9ca5-164b9f9fab60","type":"Grid"},{"id":"8e909d35-288e-4b47-bfd4-bd62d2951fb9","type":"Grid"}],"title":null,"tool_events":{"id":"b5e02447-301c-4779-aee5-50dec86d90e1","type":"ToolEvents"},"toolbar":{"id":"feed0d67-c984-43d1-aba1-af744f1770c3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"229c2d5a-e7ef-47cc-995c-50602ca456ce","type":"DataRange1d"},"y_range":{"id":"dd843932-efa0-45cf-ad54-fdd03cb610fb","type":"DataRange1d"}},"id":"2b3b1449-df27-4273-9856-11251a317ca4","type":"Plot"},{"attributes":{"formatter":{"id":"01512c87-a98d-45e3-8819-9f55eca01587","type":"BasicTickFormatter"},"plot":{"id":"2b3b1449-df27-4273-9856-11251a317ca4","type":"Plot"},"ticker":{"id":"a432961f-bf79-4977-8148-d2b36dba29fd","type":"BasicTicker"}},"id":"c55973d6-7910-433c-9058-f74ba663ae89","type":"LinearAxis"},{"attributes":{"callback":null},"id":"229c2d5a-e7ef-47cc-995c-50602ca456ce","type":"DataRange1d"},{"attributes":{},"id":"f2bc1edb-79c4-4969-8572-8d845370c93e","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"feed0d67-c984-43d1-aba1-af744f1770c3","type":"Toolbar"},{"attributes":{"data_source":{"id":"2f30be2b-ad9d-467a-bfc6-04af1133cbbd","type":"ColumnDataSource"},"glyph":{"id":"2faa1098-6a69-40a2-bfcc-fd621b90fe82","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"519a17ac-875d-4a4c-aaf9-c018e2b7f161","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"2b3b1449-df27-4273-9856-11251a317ca4","type":"Plot"},"ticker":{"id":"a432961f-bf79-4977-8148-d2b36dba29fd","type":"BasicTicker"}},"id":"d1c50066-6e5b-4692-9ca5-164b9f9fab60","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#de2d26"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2faa1098-6a69-40a2-bfcc-fd621b90fe82","type":"InvertedTriangle"},{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"2f30be2b-ad9d-467a-bfc6-04af1133cbbd","type":"ColumnDataSource"},{"attributes":{},"id":"a432961f-bf79-4977-8148-d2b36dba29fd","type":"BasicTicker"},{"attributes":{"callback":null},"id":"dd843932-efa0-45cf-ad54-fdd03cb610fb","type":"DataRange1d"}],"root_ids":["2b3b1449-df27-4273-9856-11251a317ca4"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"8e76b966-4c61-4995-9a35-22fdade9af61","elementid":"80d6ca59-addf-4679-90e3-00d94a6869b8","modelid":"2b3b1449-df27-4273-9856-11251a317ca4"}];
                
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
