(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("23cbd46a-ceaf-4976-893e-f1f77abb12d3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '23cbd46a-ceaf-4976-893e-f1f77abb12d3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"d3e3f101-ff72-4ba2-8485-fe4a29cfb4d5":{"roots":{"references":[{"attributes":{"formatter":{"id":"5fb58a86-9f6f-4704-83e6-38a4e2d21fe0","type":"BasicTickFormatter"},"plot":{"id":"3a9feb1f-dcfc-4774-a3b3-338789b4f9c5","type":"Plot"},"ticker":{"id":"60072fd3-689a-43f3-8e15-4ca5c30f427e","type":"BasicTicker"}},"id":"fee50ad0-fccb-4cf0-9b99-c7d362ca443d","type":"LinearAxis"},{"attributes":{},"id":"60072fd3-689a-43f3-8e15-4ca5c30f427e","type":"BasicTicker"},{"attributes":{"callback":null},"id":"814d7e97-f5de-45d8-b648-4b29b4c8c77f","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#de2d26"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c31042b6-86d4-4e6c-ab49-bce467effa9f","type":"InvertedTriangle"},{"attributes":{"source":{"id":"38f530bb-8b47-4b27-b75b-1f9a2f924d13","type":"ColumnDataSource"}},"id":"1fa75bdd-0a0c-4574-9293-6db83aaad2af","type":"CDSView"},{"attributes":{"formatter":{"id":"f3c3de9b-b988-40fb-9827-04f4cee22464","type":"BasicTickFormatter"},"plot":{"id":"3a9feb1f-dcfc-4774-a3b3-338789b4f9c5","type":"Plot"},"ticker":{"id":"ab598448-2179-40c7-a43b-fa96a730d7bf","type":"BasicTicker"}},"id":"cfcaa755-0684-42f6-910c-790ab1418d7b","type":"LinearAxis"},{"attributes":{},"id":"1f5ff20d-7d83-4b45-b9c8-28f244ee0296","type":"LinearScale"},{"attributes":{},"id":"ab598448-2179-40c7-a43b-fa96a730d7bf","type":"BasicTicker"},{"attributes":{"below":[{"id":"cfcaa755-0684-42f6-910c-790ab1418d7b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"fee50ad0-fccb-4cf0-9b99-c7d362ca443d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"ddfa3833-b297-42d5-b49d-77de712ca3c5","type":"GlyphRenderer"},{"id":"cfcaa755-0684-42f6-910c-790ab1418d7b","type":"LinearAxis"},{"id":"fee50ad0-fccb-4cf0-9b99-c7d362ca443d","type":"LinearAxis"},{"id":"b977e86e-7b05-44fb-9710-00ee55c47e10","type":"Grid"},{"id":"66d87982-65b1-4824-a2e3-d1c64eaa1ac5","type":"Grid"}],"title":null,"toolbar":{"id":"cd48d1be-ea89-41df-91ef-72f1a8394263","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"814d7e97-f5de-45d8-b648-4b29b4c8c77f","type":"DataRange1d"},"x_scale":{"id":"1f5ff20d-7d83-4b45-b9c8-28f244ee0296","type":"LinearScale"},"y_range":{"id":"9d942dc8-818f-4f24-b593-491f6c963c83","type":"DataRange1d"},"y_scale":{"id":"b429fdc8-d1cb-4fdb-9068-91fd6cc0362c","type":"LinearScale"}},"id":"3a9feb1f-dcfc-4774-a3b3-338789b4f9c5","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"3a9feb1f-dcfc-4774-a3b3-338789b4f9c5","type":"Plot"},"ticker":{"id":"60072fd3-689a-43f3-8e15-4ca5c30f427e","type":"BasicTicker"}},"id":"66d87982-65b1-4824-a2e3-d1c64eaa1ac5","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"cd48d1be-ea89-41df-91ef-72f1a8394263","type":"Toolbar"},{"attributes":{},"id":"b429fdc8-d1cb-4fdb-9068-91fd6cc0362c","type":"LinearScale"},{"attributes":{"plot":{"id":"3a9feb1f-dcfc-4774-a3b3-338789b4f9c5","type":"Plot"},"ticker":{"id":"ab598448-2179-40c7-a43b-fa96a730d7bf","type":"BasicTicker"}},"id":"b977e86e-7b05-44fb-9710-00ee55c47e10","type":"Grid"},{"attributes":{},"id":"5fb58a86-9f6f-4704-83e6-38a4e2d21fe0","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"38f530bb-8b47-4b27-b75b-1f9a2f924d13","type":"ColumnDataSource"},"glyph":{"id":"c31042b6-86d4-4e6c-ab49-bce467effa9f","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1fa75bdd-0a0c-4574-9293-6db83aaad2af","type":"CDSView"}},"id":"ddfa3833-b297-42d5-b49d-77de712ca3c5","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"9d942dc8-818f-4f24-b593-491f6c963c83","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"38f530bb-8b47-4b27-b75b-1f9a2f924d13","type":"ColumnDataSource"},{"attributes":{},"id":"f3c3de9b-b988-40fb-9827-04f4cee22464","type":"BasicTickFormatter"}],"root_ids":["3a9feb1f-dcfc-4774-a3b3-338789b4f9c5"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"d3e3f101-ff72-4ba2-8485-fe4a29cfb4d5","elementid":"23cbd46a-ceaf-4976-893e-f1f77abb12d3","modelid":"3a9feb1f-dcfc-4774-a3b3-338789b4f9c5"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
