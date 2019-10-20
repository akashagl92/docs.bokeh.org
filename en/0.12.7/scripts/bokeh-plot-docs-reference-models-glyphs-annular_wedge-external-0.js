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
      };var element = document.getElementById("dbd4d784-bda6-4f8e-8353-6d085568c6d2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dbd4d784-bda6-4f8e-8353-6d085568c6d2' but no matching script tag was found. ")
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
                var docs_json = {"c37e7f78-7123-40c6-a02b-f3d466c896c1":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"cf6a3dcf-1808-4bc0-b277-bcdcc3ca65e8","type":"Plot"},"ticker":{"id":"a3c71011-e9ce-49e9-b915-67bda4e2fdca","type":"BasicTicker"}},"id":"66e89ceb-6918-4b01-a525-18b96cc2a2a6","type":"Grid"},{"attributes":{"source":{"id":"0f824e88-a5de-4954-bbec-03bd03b76a34","type":"ColumnDataSource"}},"id":"5641a947-bfac-4b6e-8e7d-de612dc97083","type":"CDSView"},{"attributes":{"data_source":{"id":"0f824e88-a5de-4954-bbec-03bd03b76a34","type":"ColumnDataSource"},"glyph":{"id":"70b2e466-8584-4ef2-b8a4-1b932d9108c2","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5641a947-bfac-4b6e-8e7d-de612dc97083","type":"CDSView"}},"id":"f8d4b43b-ce4a-44ad-8109-c495b947cfcf","type":"GlyphRenderer"},{"attributes":{},"id":"791443ea-5698-4d74-8a88-89b911122396","type":"LinearScale"},{"attributes":{},"id":"c95999ca-44ce-4c48-a15e-14d9cd4653a4","type":"BasicTickFormatter"},{"attributes":{},"id":"eded5f5f-579a-4330-ab44-31104fb61a0f","type":"BasicTickFormatter"},{"attributes":{},"id":"5c167d0e-085e-4c9e-b1b8-2bd45758877e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","r"],"data":{"r":{"__ndarray__":"393d3d3dzT+amZmZmZnRP0VERERERNQ/7+7u7u7u1j+amZmZmZnZP0VERERERNw/7+7u7u7u3j/NzMzMzMzgPyIiIiIiIuI/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"0f824e88-a5de-4954-bbec-03bd03b76a34","type":"ColumnDataSource"},{"attributes":{},"id":"0679d0c5-6825-471e-85f1-9e179cc0f53d","type":"LinearScale"},{"attributes":{},"id":"a3c71011-e9ce-49e9-b915-67bda4e2fdca","type":"BasicTicker"},{"attributes":{"plot":{"id":"cf6a3dcf-1808-4bc0-b277-bcdcc3ca65e8","type":"Plot"},"ticker":{"id":"5c167d0e-085e-4c9e-b1b8-2bd45758877e","type":"BasicTicker"}},"id":"c76680bf-c71d-4449-8fbf-fd77e80ce5bc","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"70b2e466-8584-4ef2-b8a4-1b932d9108c2","type":"AnnularWedge"},{"attributes":{"callback":null},"id":"35c360db-c4bb-4107-b05d-95a536b0ef2a","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"928b20c9-1d5a-4909-b6ed-7f0e2efd65a4","type":"Toolbar"},{"attributes":{"below":[{"id":"a10832ab-5512-4cf3-9678-e23a75e85c99","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8b26a3df-9584-4a16-bde0-d955a9a98445","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f8d4b43b-ce4a-44ad-8109-c495b947cfcf","type":"GlyphRenderer"},{"id":"a10832ab-5512-4cf3-9678-e23a75e85c99","type":"LinearAxis"},{"id":"8b26a3df-9584-4a16-bde0-d955a9a98445","type":"LinearAxis"},{"id":"c76680bf-c71d-4449-8fbf-fd77e80ce5bc","type":"Grid"},{"id":"66e89ceb-6918-4b01-a525-18b96cc2a2a6","type":"Grid"}],"title":null,"toolbar":{"id":"928b20c9-1d5a-4909-b6ed-7f0e2efd65a4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"79785921-cfe7-4523-a830-50eb290a5b35","type":"DataRange1d"},"x_scale":{"id":"0679d0c5-6825-471e-85f1-9e179cc0f53d","type":"LinearScale"},"y_range":{"id":"35c360db-c4bb-4107-b05d-95a536b0ef2a","type":"DataRange1d"},"y_scale":{"id":"791443ea-5698-4d74-8a88-89b911122396","type":"LinearScale"}},"id":"cf6a3dcf-1808-4bc0-b277-bcdcc3ca65e8","type":"Plot"},{"attributes":{"callback":null},"id":"79785921-cfe7-4523-a830-50eb290a5b35","type":"DataRange1d"},{"attributes":{"formatter":{"id":"c95999ca-44ce-4c48-a15e-14d9cd4653a4","type":"BasicTickFormatter"},"plot":{"id":"cf6a3dcf-1808-4bc0-b277-bcdcc3ca65e8","type":"Plot"},"ticker":{"id":"a3c71011-e9ce-49e9-b915-67bda4e2fdca","type":"BasicTicker"}},"id":"8b26a3df-9584-4a16-bde0-d955a9a98445","type":"LinearAxis"},{"attributes":{"formatter":{"id":"eded5f5f-579a-4330-ab44-31104fb61a0f","type":"BasicTickFormatter"},"plot":{"id":"cf6a3dcf-1808-4bc0-b277-bcdcc3ca65e8","type":"Plot"},"ticker":{"id":"5c167d0e-085e-4c9e-b1b8-2bd45758877e","type":"BasicTicker"}},"id":"a10832ab-5512-4cf3-9678-e23a75e85c99","type":"LinearAxis"}],"root_ids":["cf6a3dcf-1808-4bc0-b277-bcdcc3ca65e8"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"c37e7f78-7123-40c6-a02b-f3d466c896c1","elementid":"dbd4d784-bda6-4f8e-8353-6d085568c6d2","modelid":"cf6a3dcf-1808-4bc0-b277-bcdcc3ca65e8"}];
                
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
