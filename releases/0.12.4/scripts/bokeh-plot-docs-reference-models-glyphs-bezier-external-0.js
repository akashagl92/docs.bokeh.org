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
      };var element = document.getElementById("3c7a86a6-ce2e-4d51-8032-ad87b1251f8b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3c7a86a6-ce2e-4d51-8032-ad87b1251f8b' but no matching script tag was found. ")
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
                var docs_json = {"cb23ac7c-5c72-4579-b8cd-efd5cc7f7b2d":{"roots":{"references":[{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#D95F02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"ad75b8df-047c-4b1e-b05a-b6a69a93e070","type":"Bezier"},{"attributes":{"formatter":{"id":"a97aff95-ce51-4e4e-ab07-25a938e03b60","type":"BasicTickFormatter"},"plot":{"id":"2642b2d5-7707-45ca-a558-087d1dd4fb7e","type":"Plot"},"ticker":{"id":"1a99a3fc-f47b-40e5-9262-888c5ab88fc3","type":"BasicTicker"}},"id":"db8d6dc8-d9ac-473a-b5b0-3f7840a4b46f","type":"LinearAxis"},{"attributes":{"data_source":{"id":"ad2edee6-ea0e-49d7-a847-ebd2ea0dbcef","type":"ColumnDataSource"},"glyph":{"id":"ad75b8df-047c-4b1e-b05a-b6a69a93e070","type":"Bezier"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fcad3ca9-6101-4020-a219-58d53119631f","type":"GlyphRenderer"},{"attributes":{},"id":"5acb1c62-1f8a-4e08-9ee5-b88a018a2fd1","type":"ToolEvents"},{"attributes":{"formatter":{"id":"add9a72d-a846-45f2-8bf7-ca1541fa3e98","type":"BasicTickFormatter"},"plot":{"id":"2642b2d5-7707-45ca-a558-087d1dd4fb7e","type":"Plot"},"ticker":{"id":"a1582905-e5c2-4cc3-9c3b-2e141452a30c","type":"BasicTicker"}},"id":"785b5273-8426-47c2-b706-690115ca0e99","type":"LinearAxis"},{"attributes":{"plot":{"id":"2642b2d5-7707-45ca-a558-087d1dd4fb7e","type":"Plot"},"ticker":{"id":"1a99a3fc-f47b-40e5-9262-888c5ab88fc3","type":"BasicTicker"}},"id":"2ec54ae5-df65-4eef-b11d-12a505100892","type":"Grid"},{"attributes":{"below":[{"id":"db8d6dc8-d9ac-473a-b5b0-3f7840a4b46f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"785b5273-8426-47c2-b706-690115ca0e99","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fcad3ca9-6101-4020-a219-58d53119631f","type":"GlyphRenderer"},{"id":"db8d6dc8-d9ac-473a-b5b0-3f7840a4b46f","type":"LinearAxis"},{"id":"785b5273-8426-47c2-b706-690115ca0e99","type":"LinearAxis"},{"id":"2ec54ae5-df65-4eef-b11d-12a505100892","type":"Grid"},{"id":"10b72f89-4752-4094-b55a-c122dd52f92b","type":"Grid"}],"title":null,"tool_events":{"id":"5acb1c62-1f8a-4e08-9ee5-b88a018a2fd1","type":"ToolEvents"},"toolbar":{"id":"a1ea00fd-49fc-440e-88a0-8f7f3e6d4371","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a18e27b-6ef7-48d0-98c7-911ccb2e5bae","type":"DataRange1d"},"y_range":{"id":"10e5c2d4-3869-4648-833d-dfffdb4e3300","type":"DataRange1d"}},"id":"2642b2d5-7707-45ca-a558-087d1dd4fb7e","type":"Plot"},{"attributes":{"callback":null},"id":"10e5c2d4-3869-4648-833d-dfffdb4e3300","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"2642b2d5-7707-45ca-a558-087d1dd4fb7e","type":"Plot"},"ticker":{"id":"a1582905-e5c2-4cc3-9c3b-2e141452a30c","type":"BasicTicker"}},"id":"10b72f89-4752-4094-b55a-c122dd52f92b","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","ym01","xp01","xp02","y","yp01","xm01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zczMzMzMAMCamZmZmZn5v5qZmZmZmfG/MzMzMzMz47+amZmZmZm5v5qZmZmZmdk/zczMzMzM7D9mZmZmZmb2P2ZmZmZmZv4/","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmDkBmZmZmZmYAQJqZmZmZmek/mJmZmZmZqT+amZmZmZnJv5iZmZmZmak/mpmZmZmZ6T9mZmZmZmYAQGZmZmZmZg5A","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}}},"id":"ad2edee6-ea0e-49d7-a847-ebd2ea0dbcef","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"5a18e27b-6ef7-48d0-98c7-911ccb2e5bae","type":"DataRange1d"},{"attributes":{},"id":"a97aff95-ce51-4e4e-ab07-25a938e03b60","type":"BasicTickFormatter"},{"attributes":{},"id":"1a99a3fc-f47b-40e5-9262-888c5ab88fc3","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a1ea00fd-49fc-440e-88a0-8f7f3e6d4371","type":"Toolbar"},{"attributes":{},"id":"add9a72d-a846-45f2-8bf7-ca1541fa3e98","type":"BasicTickFormatter"},{"attributes":{},"id":"a1582905-e5c2-4cc3-9c3b-2e141452a30c","type":"BasicTicker"}],"root_ids":["2642b2d5-7707-45ca-a558-087d1dd4fb7e"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"cb23ac7c-5c72-4579-b8cd-efd5cc7f7b2d","elementid":"3c7a86a6-ce2e-4d51-8032-ad87b1251f8b","modelid":"2642b2d5-7707-45ca-a558-087d1dd4fb7e"}];
                
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
