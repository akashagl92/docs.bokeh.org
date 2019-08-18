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
      };var element = document.getElementById("bf14297f-ca19-4629-95f0-faba42d8f610");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bf14297f-ca19-4629-95f0-faba42d8f610' but no matching script tag was found. ")
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
                var docs_json = {"c4a1b1c0-2e74-4a17-806f-38987b822dea":{"roots":{"references":[{"attributes":{},"id":"772ad70f-5946-40ac-b59a-f87ce18ce51c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"772ad70f-5946-40ac-b59a-f87ce18ce51c","type":"BasicTickFormatter"},"plot":{"id":"81d15ed7-96c7-4c29-9315-e75a71875ccf","type":"Plot"},"ticker":{"id":"879444c6-317f-4490-be88-38a87f1beb0d","type":"BasicTicker"}},"id":"c9f20faa-05b0-4870-846c-fc4e62c29220","type":"LinearAxis"},{"attributes":{},"id":"6efcfeb1-5d68-44c1-a3ed-5ae5234d75a7","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"430c3972-8694-4806-b36c-7c5283c72a6c","type":"DataRange1d"},{"attributes":{},"id":"43ee9dfc-48f9-4ef6-9343-1f533df10eb5","type":"BasicTicker"},{"attributes":{"data_source":{"id":"32f641a4-848e-4b69-8a16-1c56ccfdca05","type":"ColumnDataSource"},"glyph":{"id":"3442543f-dd30-4990-892c-5458366a6110","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"af56876d-12b6-4260-a7b8-53ba0e7bf00b","type":"CDSView"}},"id":"58c84856-5023-4102-b6d8-53483ed07505","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"4474262d-0050-4edf-b622-7f29d5c38674","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"81d15ed7-96c7-4c29-9315-e75a71875ccf","type":"Plot"},"ticker":{"id":"879444c6-317f-4490-be88-38a87f1beb0d","type":"BasicTicker"}},"id":"61566187-2f77-488b-902b-687d746d9ecd","type":"Grid"},{"attributes":{"formatter":{"id":"6efcfeb1-5d68-44c1-a3ed-5ae5234d75a7","type":"BasicTickFormatter"},"plot":{"id":"81d15ed7-96c7-4c29-9315-e75a71875ccf","type":"Plot"},"ticker":{"id":"43ee9dfc-48f9-4ef6-9343-1f533df10eb5","type":"BasicTicker"}},"id":"f99a9943-fc3c-4b9e-b700-cbbe399e01e7","type":"LinearAxis"},{"attributes":{"source":{"id":"32f641a4-848e-4b69-8a16-1c56ccfdca05","type":"ColumnDataSource"}},"id":"af56876d-12b6-4260-a7b8-53ba0e7bf00b","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"96205a20-bc1c-4c05-a323-a39c6980b6c5","type":"Toolbar"},{"attributes":{},"id":"74f822f5-3449-4e9d-959a-4cf53e55504a","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","xm01","ym01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]}}},"id":"32f641a4-848e-4b69-8a16-1c56ccfdca05","type":"ColumnDataSource"},{"attributes":{},"id":"879444c6-317f-4490-be88-38a87f1beb0d","type":"BasicTicker"},{"attributes":{"plot":{"id":"81d15ed7-96c7-4c29-9315-e75a71875ccf","type":"Plot"},"ticker":{"id":"43ee9dfc-48f9-4ef6-9343-1f533df10eb5","type":"BasicTicker"}},"id":"e04f3cba-21ba-42fc-94cb-6ccbd0874ee4","type":"Grid"},{"attributes":{"below":[{"id":"f99a9943-fc3c-4b9e-b700-cbbe399e01e7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c9f20faa-05b0-4870-846c-fc4e62c29220","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"58c84856-5023-4102-b6d8-53483ed07505","type":"GlyphRenderer"},{"id":"f99a9943-fc3c-4b9e-b700-cbbe399e01e7","type":"LinearAxis"},{"id":"c9f20faa-05b0-4870-846c-fc4e62c29220","type":"LinearAxis"},{"id":"e04f3cba-21ba-42fc-94cb-6ccbd0874ee4","type":"Grid"},{"id":"61566187-2f77-488b-902b-687d746d9ecd","type":"Grid"}],"title":null,"toolbar":{"id":"96205a20-bc1c-4c05-a323-a39c6980b6c5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"430c3972-8694-4806-b36c-7c5283c72a6c","type":"DataRange1d"},"x_scale":{"id":"74f822f5-3449-4e9d-959a-4cf53e55504a","type":"LinearScale"},"y_range":{"id":"4474262d-0050-4edf-b622-7f29d5c38674","type":"DataRange1d"},"y_scale":{"id":"6dc11a1b-d4df-47d5-9e99-1e737eee0b77","type":"LinearScale"}},"id":"81d15ed7-96c7-4c29-9315-e75a71875ccf","type":"Plot"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"3442543f-dd30-4990-892c-5458366a6110","type":"Segment"},{"attributes":{},"id":"6dc11a1b-d4df-47d5-9e99-1e737eee0b77","type":"LinearScale"}],"root_ids":["81d15ed7-96c7-4c29-9315-e75a71875ccf"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"c4a1b1c0-2e74-4a17-806f-38987b822dea","elementid":"bf14297f-ca19-4629-95f0-faba42d8f610","modelid":"81d15ed7-96c7-4c29-9315-e75a71875ccf"}];
                
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
