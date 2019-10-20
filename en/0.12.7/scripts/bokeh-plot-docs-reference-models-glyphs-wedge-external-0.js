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
      };var element = document.getElementById("4255e347-4ec9-4313-af2c-3e1eed16f2c6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4255e347-4ec9-4313-af2c-3e1eed16f2c6' but no matching script tag was found. ")
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
                var docs_json = {"6269cdb6-b7ab-4edc-b06a-8cd4a9fe2ffe":{"roots":{"references":[{"attributes":{},"id":"a6d32956-c0d3-4928-a692-a96ed08eb637","type":"LinearScale"},{"attributes":{"plot":{"id":"aa36b264-f1f4-43e6-b80c-5f0ae70b8808","type":"Plot"},"ticker":{"id":"efcf3f7b-f1e5-4113-bf93-3e5e1ab95cfe","type":"BasicTicker"}},"id":"f9794987-869d-452c-9982-4ea9ca2568eb","type":"Grid"},{"attributes":{},"id":"96950ab7-e622-4e16-9ba5-d72badb5320e","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"60df4fbc-f224-4fe0-9aeb-ea0df28f5aa4","type":"DataRange1d"},{"attributes":{"below":[{"id":"2e2f9448-f335-4dbc-8fb3-d948bd05d9d6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"bdbbede6-3bc2-4899-a5fa-26dd662f9229","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"746bd022-021f-45ef-a1d5-144809fa1cfe","type":"GlyphRenderer"},{"id":"2e2f9448-f335-4dbc-8fb3-d948bd05d9d6","type":"LinearAxis"},{"id":"bdbbede6-3bc2-4899-a5fa-26dd662f9229","type":"LinearAxis"},{"id":"f9794987-869d-452c-9982-4ea9ca2568eb","type":"Grid"},{"id":"fe254112-bbbb-4118-b1ad-0095737129f5","type":"Grid"}],"title":null,"toolbar":{"id":"6e859080-8bca-4329-8792-cbbd7e54b635","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"49343232-a031-44bb-8ed6-d16a97b1ab9c","type":"DataRange1d"},"x_scale":{"id":"a6d32956-c0d3-4928-a692-a96ed08eb637","type":"LinearScale"},"y_range":{"id":"60df4fbc-f224-4fe0-9aeb-ea0df28f5aa4","type":"DataRange1d"},"y_scale":{"id":"1ec4facb-f447-41a9-82e3-b534b42d85cc","type":"LinearScale"}},"id":"aa36b264-f1f4-43e6-b80c-5f0ae70b8808","type":"Plot"},{"attributes":{},"id":"1ec4facb-f447-41a9-82e3-b534b42d85cc","type":"LinearScale"},{"attributes":{},"id":"efcf3f7b-f1e5-4113-bf93-3e5e1ab95cfe","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"6e859080-8bca-4329-8792-cbbd7e54b635","type":"Toolbar"},{"attributes":{},"id":"f3a1db25-5470-4b00-8b7a-fa3d2994cdd6","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#B3DE69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"03709847-5b3d-439d-87a3-32a9c5fff445","type":"Wedge"},{"attributes":{"formatter":{"id":"96950ab7-e622-4e16-9ba5-d72badb5320e","type":"BasicTickFormatter"},"plot":{"id":"aa36b264-f1f4-43e6-b80c-5f0ae70b8808","type":"Plot"},"ticker":{"id":"efcf3f7b-f1e5-4113-bf93-3e5e1ab95cfe","type":"BasicTicker"}},"id":"2e2f9448-f335-4dbc-8fb3-d948bd05d9d6","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8012b54f-165e-468c-918b-871a602d1a52","type":"ColumnDataSource"},"glyph":{"id":"03709847-5b3d-439d-87a3-32a9c5fff445","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a1075d4c-251e-484f-a7b7-562edfedc71e","type":"CDSView"}},"id":"746bd022-021f-45ef-a1d5-144809fa1cfe","type":"GlyphRenderer"},{"attributes":{},"id":"d11dfb8f-9f6e-4d44-8a66-81ddac51a12b","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","r"],"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"8012b54f-165e-468c-918b-871a602d1a52","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"49343232-a031-44bb-8ed6-d16a97b1ab9c","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f3a1db25-5470-4b00-8b7a-fa3d2994cdd6","type":"BasicTickFormatter"},"plot":{"id":"aa36b264-f1f4-43e6-b80c-5f0ae70b8808","type":"Plot"},"ticker":{"id":"d11dfb8f-9f6e-4d44-8a66-81ddac51a12b","type":"BasicTicker"}},"id":"bdbbede6-3bc2-4899-a5fa-26dd662f9229","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"aa36b264-f1f4-43e6-b80c-5f0ae70b8808","type":"Plot"},"ticker":{"id":"d11dfb8f-9f6e-4d44-8a66-81ddac51a12b","type":"BasicTicker"}},"id":"fe254112-bbbb-4118-b1ad-0095737129f5","type":"Grid"},{"attributes":{"source":{"id":"8012b54f-165e-468c-918b-871a602d1a52","type":"ColumnDataSource"}},"id":"a1075d4c-251e-484f-a7b7-562edfedc71e","type":"CDSView"}],"root_ids":["aa36b264-f1f4-43e6-b80c-5f0ae70b8808"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"6269cdb6-b7ab-4edc-b06a-8cd4a9fe2ffe","elementid":"4255e347-4ec9-4313-af2c-3e1eed16f2c6","modelid":"aa36b264-f1f4-43e6-b80c-5f0ae70b8808"}];
                
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
