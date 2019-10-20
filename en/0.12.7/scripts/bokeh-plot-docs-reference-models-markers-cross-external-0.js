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
      };var element = document.getElementById("fd26c2d9-a3a6-4df9-8031-ae95af0ca513");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fd26c2d9-a3a6-4df9-8031-ae95af0ca513' but no matching script tag was found. ")
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
                var docs_json = {"681d2097-09f6-4269-ae70-30d77307d0d6":{"roots":{"references":[{"attributes":{"data_source":{"id":"05586649-e285-4d90-8673-44b4aff4fceb","type":"ColumnDataSource"},"glyph":{"id":"88b4b87e-bc55-4bb6-9710-00311e329d21","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0ef66a70-aa18-4158-a9f5-4909a509ad8f","type":"CDSView"}},"id":"aaebbe0e-9ee3-4372-9618-53461f24effa","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c83490ee-b251-4b68-babe-cb893eef36aa","type":"Plot"},"ticker":{"id":"8a32c3a9-aadb-4513-bdf5-4582ef4e7999","type":"BasicTicker"}},"id":"cbdd00f6-a0bc-4f4c-97e4-0e75e298cdcd","type":"Grid"},{"attributes":{"formatter":{"id":"867dd986-4623-4450-8556-7386bab50131","type":"BasicTickFormatter"},"plot":{"id":"c83490ee-b251-4b68-babe-cb893eef36aa","type":"Plot"},"ticker":{"id":"8a32c3a9-aadb-4513-bdf5-4582ef4e7999","type":"BasicTicker"}},"id":"232b2de3-386d-4c3f-918c-62518f73a76e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"45ab7520-ced2-4cce-af5f-fcb492a7dfc0","type":"DataRange1d"},{"attributes":{},"id":"867dd986-4623-4450-8556-7386bab50131","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f32b2fa1-79e7-40e5-ac1c-4114d43f4b1b","type":"Toolbar"},{"attributes":{"callback":null},"id":"e3551efa-7b4d-4313-bd69-9825b03e6804","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"c83490ee-b251-4b68-babe-cb893eef36aa","type":"Plot"},"ticker":{"id":"0cf2c078-4ee7-4d07-a6b6-f83d04d2893f","type":"BasicTicker"}},"id":"69f3fe5e-85cc-462e-9e53-ce9bf6d26230","type":"Grid"},{"attributes":{},"id":"92037b74-ace2-4a85-ac1c-ae297133837f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"92037b74-ace2-4a85-ac1c-ae297133837f","type":"BasicTickFormatter"},"plot":{"id":"c83490ee-b251-4b68-babe-cb893eef36aa","type":"Plot"},"ticker":{"id":"0cf2c078-4ee7-4d07-a6b6-f83d04d2893f","type":"BasicTicker"}},"id":"2d200249-b2c6-4a74-a26d-b3fe346eba18","type":"LinearAxis"},{"attributes":{"below":[{"id":"232b2de3-386d-4c3f-918c-62518f73a76e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2d200249-b2c6-4a74-a26d-b3fe346eba18","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"aaebbe0e-9ee3-4372-9618-53461f24effa","type":"GlyphRenderer"},{"id":"232b2de3-386d-4c3f-918c-62518f73a76e","type":"LinearAxis"},{"id":"2d200249-b2c6-4a74-a26d-b3fe346eba18","type":"LinearAxis"},{"id":"cbdd00f6-a0bc-4f4c-97e4-0e75e298cdcd","type":"Grid"},{"id":"69f3fe5e-85cc-462e-9e53-ce9bf6d26230","type":"Grid"}],"title":null,"toolbar":{"id":"f32b2fa1-79e7-40e5-ac1c-4114d43f4b1b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e3551efa-7b4d-4313-bd69-9825b03e6804","type":"DataRange1d"},"x_scale":{"id":"cc6ebb7c-b770-4e13-a1cc-18abe8cb325e","type":"LinearScale"},"y_range":{"id":"45ab7520-ced2-4cce-af5f-fcb492a7dfc0","type":"DataRange1d"},"y_scale":{"id":"5cd4e709-1cbd-4bcd-8319-9446898fafd4","type":"LinearScale"}},"id":"c83490ee-b251-4b68-babe-cb893eef36aa","type":"Plot"},{"attributes":{},"id":"5cd4e709-1cbd-4bcd-8319-9446898fafd4","type":"LinearScale"},{"attributes":{"source":{"id":"05586649-e285-4d90-8673-44b4aff4fceb","type":"ColumnDataSource"}},"id":"0ef66a70-aa18-4158-a9f5-4909a509ad8f","type":"CDSView"},{"attributes":{},"id":"0cf2c078-4ee7-4d07-a6b6-f83d04d2893f","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"05586649-e285-4d90-8673-44b4aff4fceb","type":"ColumnDataSource"},{"attributes":{},"id":"cc6ebb7c-b770-4e13-a1cc-18abe8cb325e","type":"LinearScale"},{"attributes":{},"id":"8a32c3a9-aadb-4513-bdf5-4582ef4e7999","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"88b4b87e-bc55-4bb6-9710-00311e329d21","type":"Cross"}],"root_ids":["c83490ee-b251-4b68-babe-cb893eef36aa"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"681d2097-09f6-4269-ae70-30d77307d0d6","elementid":"fd26c2d9-a3a6-4df9-8031-ae95af0ca513","modelid":"c83490ee-b251-4b68-babe-cb893eef36aa"}];
                
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
