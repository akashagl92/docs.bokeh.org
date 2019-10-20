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
      };var element = document.getElementById("b72f58f2-f6c2-43bd-aed0-c98e3028ab8c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b72f58f2-f6c2-43bd-aed0-c98e3028ab8c' but no matching script tag was found. ")
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
                var docs_json = {"85b8e07e-1892-4b25-926f-36d0622cc079":{"roots":{"references":[{"attributes":{},"id":"f2a83f77-c4bf-42b1-b374-0aabd3046c5b","type":"BasicTickFormatter"},{"attributes":{},"id":"09f9a004-5fe4-4276-ab77-b166b3a75424","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3d23d069-74a1-4e33-b274-8f35949f7cac","type":"Plot"},"ticker":{"id":"377065c6-2baf-4d2c-9a08-c85d4711a89a","type":"BasicTicker"}},"id":"ba01e0d1-7464-4f2a-83e9-bb2c779b119b","type":"Grid"},{"attributes":{"formatter":{"id":"f2a83f77-c4bf-42b1-b374-0aabd3046c5b","type":"BasicTickFormatter"},"plot":{"id":"3d23d069-74a1-4e33-b274-8f35949f7cac","type":"Plot"},"ticker":{"id":"067f4755-fd2e-4ea7-847e-79adb90fda90","type":"BasicTicker"}},"id":"13f443f8-1945-4c7a-bffe-7cd23a73f7c2","type":"LinearAxis"},{"attributes":{"formatter":{"id":"09f9a004-5fe4-4276-ab77-b166b3a75424","type":"BasicTickFormatter"},"plot":{"id":"3d23d069-74a1-4e33-b274-8f35949f7cac","type":"Plot"},"ticker":{"id":"377065c6-2baf-4d2c-9a08-c85d4711a89a","type":"BasicTicker"}},"id":"e4385e14-cb06-4b89-a316-ae54f522e66f","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c6db3bd9-a7ac-4df3-b36a-93edac6dab11","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"03d59cb7-5d75-4b12-bec1-dd5103cd5c4c","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"3d23d069-74a1-4e33-b274-8f35949f7cac","type":"Plot"},"ticker":{"id":"067f4755-fd2e-4ea7-847e-79adb90fda90","type":"BasicTicker"}},"id":"02d586fa-c947-48f0-a874-2e479fa39aae","type":"Grid"},{"attributes":{"data_source":{"id":"03d59cb7-5d75-4b12-bec1-dd5103cd5c4c","type":"ColumnDataSource"},"glyph":{"id":"3236957f-ec80-49b6-bb41-6468f2b5c449","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d950b1bb-f3a2-4d66-9eb4-12beed040b83","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"72dfb6e9-7a12-4b3b-abbf-82347e780e75","type":"DataRange1d"},{"attributes":{"below":[{"id":"e4385e14-cb06-4b89-a316-ae54f522e66f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"13f443f8-1945-4c7a-bffe-7cd23a73f7c2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d950b1bb-f3a2-4d66-9eb4-12beed040b83","type":"GlyphRenderer"},{"id":"e4385e14-cb06-4b89-a316-ae54f522e66f","type":"LinearAxis"},{"id":"13f443f8-1945-4c7a-bffe-7cd23a73f7c2","type":"LinearAxis"},{"id":"ba01e0d1-7464-4f2a-83e9-bb2c779b119b","type":"Grid"},{"id":"02d586fa-c947-48f0-a874-2e479fa39aae","type":"Grid"}],"title":null,"tool_events":{"id":"a363b371-f69b-4956-a6da-1eed3e27b2e1","type":"ToolEvents"},"toolbar":{"id":"c6db3bd9-a7ac-4df3-b36a-93edac6dab11","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"921e2070-cc3e-4e55-8723-773ef442ae26","type":"DataRange1d"},"y_range":{"id":"72dfb6e9-7a12-4b3b-abbf-82347e780e75","type":"DataRange1d"}},"id":"3d23d069-74a1-4e33-b274-8f35949f7cac","type":"Plot"},{"attributes":{},"id":"377065c6-2baf-4d2c-9a08-c85d4711a89a","type":"BasicTicker"},{"attributes":{},"id":"067f4755-fd2e-4ea7-847e-79adb90fda90","type":"BasicTicker"},{"attributes":{"callback":null},"id":"921e2070-cc3e-4e55-8723-773ef442ae26","type":"DataRange1d"},{"attributes":{},"id":"a363b371-f69b-4956-a6da-1eed3e27b2e1","type":"ToolEvents"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3236957f-ec80-49b6-bb41-6468f2b5c449","type":"Diamond"}],"root_ids":["3d23d069-74a1-4e33-b274-8f35949f7cac"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"85b8e07e-1892-4b25-926f-36d0622cc079","elementid":"b72f58f2-f6c2-43bd-aed0-c98e3028ab8c","modelid":"3d23d069-74a1-4e33-b274-8f35949f7cac"}];
                
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
