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
      };var element = document.getElementById("7c64fe8d-ca53-4d69-84c5-c692c012ff04");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7c64fe8d-ca53-4d69-84c5-c692c012ff04' but no matching script tag was found. ")
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
                var docs_json = {"7e80032f-89ff-421b-8cde-24eff73c07dd":{"roots":{"references":[{"attributes":{},"id":"69f8ff53-eeae-4dc1-b038-f5b83946a0aa","type":"BasicTickFormatter"},{"attributes":{},"id":"6b24a524-1da8-4e25-b58f-995b28c7878d","type":"LinearScale"},{"attributes":{},"id":"825ba147-7b6d-4785-ba7e-82102bee3bc9","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9fa87d50-a14c-443d-a5a7-11877ebcc1b5","type":"DataRange1d"},{"attributes":{"data_source":{"id":"9a58beac-a01b-47f7-b6f1-51925c00cefd","type":"ColumnDataSource"},"glyph":{"id":"21cf484e-0961-4c9d-805f-1232179c8000","type":"Quadratic"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"e33b207c-934c-48a1-af52-d8d8bec94bef","type":"CDSView"}},"id":"227eb7f2-2b0e-4854-a251-59736fff584f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"1909444f-cc58-43e9-b56e-091e463fb408","type":"Plot"},"ticker":{"id":"37d191df-da3d-4d2a-bfbd-12ce60f90910","type":"BasicTicker"}},"id":"d3a4ebad-fa53-4782-8c38-f1c28979b616","type":"Grid"},{"attributes":{},"id":"0020699f-6e1b-42be-9134-a11723a2b478","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"69f8ff53-eeae-4dc1-b038-f5b83946a0aa","type":"BasicTickFormatter"},"plot":{"id":"1909444f-cc58-43e9-b56e-091e463fb408","type":"Plot"},"ticker":{"id":"37d191df-da3d-4d2a-bfbd-12ce60f90910","type":"BasicTicker"}},"id":"3cb1e4cb-d551-4c00-b7bb-d7e3e7dce49d","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"1909444f-cc58-43e9-b56e-091e463fb408","type":"Plot"},"ticker":{"id":"825ba147-7b6d-4785-ba7e-82102bee3bc9","type":"BasicTicker"}},"id":"2ae2937d-994c-47e3-818c-5106f791d52a","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","xp02","xp01","yp01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}}},"id":"9a58beac-a01b-47f7-b6f1-51925c00cefd","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d3a69f61-e94e-4c51-9045-08d5f6422e10","type":"Toolbar"},{"attributes":{"below":[{"id":"3cb1e4cb-d551-4c00-b7bb-d7e3e7dce49d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"51360b26-f232-4218-98f8-5532da1a499d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"227eb7f2-2b0e-4854-a251-59736fff584f","type":"GlyphRenderer"},{"id":"3cb1e4cb-d551-4c00-b7bb-d7e3e7dce49d","type":"LinearAxis"},{"id":"51360b26-f232-4218-98f8-5532da1a499d","type":"LinearAxis"},{"id":"d3a4ebad-fa53-4782-8c38-f1c28979b616","type":"Grid"},{"id":"2ae2937d-994c-47e3-818c-5106f791d52a","type":"Grid"}],"title":null,"toolbar":{"id":"d3a69f61-e94e-4c51-9045-08d5f6422e10","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fb4ff3ab-cd9c-4635-9a90-e74fc84eeaae","type":"DataRange1d"},"x_scale":{"id":"6b24a524-1da8-4e25-b58f-995b28c7878d","type":"LinearScale"},"y_range":{"id":"9fa87d50-a14c-443d-a5a7-11877ebcc1b5","type":"DataRange1d"},"y_scale":{"id":"80468fd0-bf50-4dd8-bfd4-7d3e48ae85bb","type":"LinearScale"}},"id":"1909444f-cc58-43e9-b56e-091e463fb408","type":"Plot"},{"attributes":{"callback":null},"id":"fb4ff3ab-cd9c-4635-9a90-e74fc84eeaae","type":"DataRange1d"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4DAF4A"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"21cf484e-0961-4c9d-805f-1232179c8000","type":"Quadratic"},{"attributes":{"source":{"id":"9a58beac-a01b-47f7-b6f1-51925c00cefd","type":"ColumnDataSource"}},"id":"e33b207c-934c-48a1-af52-d8d8bec94bef","type":"CDSView"},{"attributes":{},"id":"80468fd0-bf50-4dd8-bfd4-7d3e48ae85bb","type":"LinearScale"},{"attributes":{},"id":"37d191df-da3d-4d2a-bfbd-12ce60f90910","type":"BasicTicker"},{"attributes":{"formatter":{"id":"0020699f-6e1b-42be-9134-a11723a2b478","type":"BasicTickFormatter"},"plot":{"id":"1909444f-cc58-43e9-b56e-091e463fb408","type":"Plot"},"ticker":{"id":"825ba147-7b6d-4785-ba7e-82102bee3bc9","type":"BasicTicker"}},"id":"51360b26-f232-4218-98f8-5532da1a499d","type":"LinearAxis"}],"root_ids":["1909444f-cc58-43e9-b56e-091e463fb408"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"7e80032f-89ff-421b-8cde-24eff73c07dd","elementid":"7c64fe8d-ca53-4d69-84c5-c692c012ff04","modelid":"1909444f-cc58-43e9-b56e-091e463fb408"}];
                
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
