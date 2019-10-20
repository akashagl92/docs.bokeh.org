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
      };var element = document.getElementById("3a068531-e477-4aea-951b-9e9a0845d2e1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3a068531-e477-4aea-951b-9e9a0845d2e1' but no matching script tag was found. ")
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
                var docs_json = {"dd38cacf-3e23-4455-a9a0-c42e9dd0e66f":{"roots":{"references":[{"attributes":{"source":{"id":"99ab5801-e8e2-48ee-9cd4-5eeda1818e58","type":"ColumnDataSource"}},"id":"11f35dfa-0574-4645-97c7-7004015ad701","type":"CDSView"},{"attributes":{},"id":"827bef21-39bf-44f9-86cf-1373e9b90f7e","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3520f43d-209a-4145-af8c-3de7e6d4b46d","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y","w","h"],"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"99ab5801-e8e2-48ee-9cd4-5eeda1818e58","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"daac10db-b347-45c2-919b-f6d71a4e0da8","type":"BasicTickFormatter"},"plot":{"id":"92ca33a7-5aad-4c98-bbd1-7055d1c43676","type":"Plot"},"ticker":{"id":"827bef21-39bf-44f9-86cf-1373e9b90f7e","type":"BasicTicker"}},"id":"7a94b06e-3620-4541-be77-b16f630a6a06","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"92ca33a7-5aad-4c98-bbd1-7055d1c43676","type":"Plot"},"ticker":{"id":"827bef21-39bf-44f9-86cf-1373e9b90f7e","type":"BasicTicker"}},"id":"6ba45358-148e-42f2-ac9c-498fd0799db2","type":"Grid"},{"attributes":{},"id":"1d0fb414-6fde-4fd2-b74b-55aa5d7eec18","type":"LinearScale"},{"attributes":{"callback":null},"id":"5123a0b0-ff37-4c9c-8483-8c0a63352e68","type":"DataRange1d"},{"attributes":{"below":[{"id":"149b2a6d-c350-4568-960b-f495083339f7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"7a94b06e-3620-4541-be77-b16f630a6a06","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c51cf449-0a6f-4372-8a03-277db255679c","type":"GlyphRenderer"},{"id":"149b2a6d-c350-4568-960b-f495083339f7","type":"LinearAxis"},{"id":"7a94b06e-3620-4541-be77-b16f630a6a06","type":"LinearAxis"},{"id":"25a2657f-cca8-4e29-8429-003609c23ca7","type":"Grid"},{"id":"6ba45358-148e-42f2-ac9c-498fd0799db2","type":"Grid"}],"title":null,"toolbar":{"id":"3520f43d-209a-4145-af8c-3de7e6d4b46d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5123a0b0-ff37-4c9c-8483-8c0a63352e68","type":"DataRange1d"},"x_scale":{"id":"33ea10a6-8243-4eb1-91a9-bd511b2d0169","type":"LinearScale"},"y_range":{"id":"22f0d017-1215-4145-9d94-d147716ee2f4","type":"DataRange1d"},"y_scale":{"id":"1d0fb414-6fde-4fd2-b74b-55aa5d7eec18","type":"LinearScale"}},"id":"92ca33a7-5aad-4c98-bbd1-7055d1c43676","type":"Plot"},{"attributes":{"plot":{"id":"92ca33a7-5aad-4c98-bbd1-7055d1c43676","type":"Plot"},"ticker":{"id":"647f1998-c78c-4c62-be67-579cbe82e9f6","type":"BasicTicker"}},"id":"25a2657f-cca8-4e29-8429-003609c23ca7","type":"Grid"},{"attributes":{"callback":null},"id":"22f0d017-1215-4145-9d94-d147716ee2f4","type":"DataRange1d"},{"attributes":{},"id":"483184ad-38ce-473d-a16e-a4b6a48739b2","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"99ab5801-e8e2-48ee-9cd4-5eeda1818e58","type":"ColumnDataSource"},"glyph":{"id":"cf3d2c30-4b88-4613-ac0d-268a1683cf5a","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11f35dfa-0574-4645-97c7-7004015ad701","type":"CDSView"}},"id":"c51cf449-0a6f-4372-8a03-277db255679c","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"483184ad-38ce-473d-a16e-a4b6a48739b2","type":"BasicTickFormatter"},"plot":{"id":"92ca33a7-5aad-4c98-bbd1-7055d1c43676","type":"Plot"},"ticker":{"id":"647f1998-c78c-4c62-be67-579cbe82e9f6","type":"BasicTicker"}},"id":"149b2a6d-c350-4568-960b-f495083339f7","type":"LinearAxis"},{"attributes":{},"id":"33ea10a6-8243-4eb1-91a9-bd511b2d0169","type":"LinearScale"},{"attributes":{},"id":"daac10db-b347-45c2-919b-f6d71a4e0da8","type":"BasicTickFormatter"},{"attributes":{},"id":"647f1998-c78c-4c62-be67-579cbe82e9f6","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf3d2c30-4b88-4613-ac0d-268a1683cf5a","type":"Ellipse"}],"root_ids":["92ca33a7-5aad-4c98-bbd1-7055d1c43676"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"dd38cacf-3e23-4455-a9a0-c42e9dd0e66f","elementid":"3a068531-e477-4aea-951b-9e9a0845d2e1","modelid":"92ca33a7-5aad-4c98-bbd1-7055d1c43676"}];
                
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
