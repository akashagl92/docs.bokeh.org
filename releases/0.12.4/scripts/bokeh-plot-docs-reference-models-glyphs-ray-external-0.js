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
      };var element = document.getElementById("de5aef64-9dc2-4b62-ac23-97ef3ead8f6d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'de5aef64-9dc2-4b62-ac23-97ef3ead8f6d' but no matching script tag was found. ")
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
                var docs_json = {"66315d9f-69fd-4aee-b2a0-3f029e346a12":{"roots":{"references":[{"attributes":{"callback":null},"id":"e0c6bb47-c6b8-42c7-8695-ca8f1a4c645d","type":"DataRange1d"},{"attributes":{"below":[{"id":"85c71c45-e0f3-4a36-ad9d-6ab31209f520","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"45f2f6b9-3c3c-48b4-8121-16e099e3ac5c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0083c16f-28b9-46f3-a26d-7d49b329287b","type":"GlyphRenderer"},{"id":"85c71c45-e0f3-4a36-ad9d-6ab31209f520","type":"LinearAxis"},{"id":"45f2f6b9-3c3c-48b4-8121-16e099e3ac5c","type":"LinearAxis"},{"id":"bf65ad87-f200-4616-b397-723b3dcb0fc3","type":"Grid"},{"id":"54398187-a145-40c5-b441-72bd76e2fbcf","type":"Grid"}],"title":null,"tool_events":{"id":"07243475-63f8-4a49-8fd0-0dc0c407b102","type":"ToolEvents"},"toolbar":{"id":"a4b065ac-755b-4191-986c-956313cb71f5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"deec3d91-2684-486b-b7f2-870ad696d42e","type":"DataRange1d"},"y_range":{"id":"e0c6bb47-c6b8-42c7-8695-ca8f1a4c645d","type":"DataRange1d"}},"id":"ea54921d-2d7f-48ee-a0e9-34450b487a75","type":"Plot"},{"attributes":{"plot":{"id":"ea54921d-2d7f-48ee-a0e9-34450b487a75","type":"Plot"},"ticker":{"id":"971743c9-ede7-4019-9510-dc715fb4965f","type":"BasicTicker"}},"id":"bf65ad87-f200-4616-b397-723b3dcb0fc3","type":"Grid"},{"attributes":{},"id":"07243475-63f8-4a49-8fd0-0dc0c407b102","type":"ToolEvents"},{"attributes":{"data_source":{"id":"e377d846-2707-4e21-b978-e99801922f69","type":"ColumnDataSource"},"glyph":{"id":"d74279d1-3085-4259-8b31-c630d23517aa","type":"Ray"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0083c16f-28b9-46f3-a26d-7d49b329287b","type":"GlyphRenderer"},{"attributes":{},"id":"9cfca949-824f-4097-ac9d-a1fe12735f36","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"de655a39-11da-4951-9c5a-49caceb32b24","type":"BasicTickFormatter"},"plot":{"id":"ea54921d-2d7f-48ee-a0e9-34450b487a75","type":"Plot"},"ticker":{"id":"ac26efb5-e823-4e9a-8ed0-daadd620f994","type":"BasicTicker"}},"id":"45f2f6b9-3c3c-48b4-8121-16e099e3ac5c","type":"LinearAxis"},{"attributes":{},"id":"971743c9-ede7-4019-9510-dc715fb4965f","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ea54921d-2d7f-48ee-a0e9-34450b487a75","type":"Plot"},"ticker":{"id":"ac26efb5-e823-4e9a-8ed0-daadd620f994","type":"BasicTicker"}},"id":"54398187-a145-40c5-b441-72bd76e2fbcf","type":"Grid"},{"attributes":{"callback":null},"id":"deec3d91-2684-486b-b7f2-870ad696d42e","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","l","y"],"data":{"l":{"__ndarray__":"AAAAAAAALkAAAAAAAIAxQAAAAAAAADRAAAAAAACANkAAAAAAAAA5QAAAAAAAgDtAAAAAAAAAPkAAAAAAAEBAQAAAAAAAgEFA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"e377d846-2707-4e21-b978-e99801922f69","type":"ColumnDataSource"},{"attributes":{},"id":"de655a39-11da-4951-9c5a-49caceb32b24","type":"BasicTickFormatter"},{"attributes":{},"id":"ac26efb5-e823-4e9a-8ed0-daadd620f994","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a4b065ac-755b-4191-986c-956313cb71f5","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"d74279d1-3085-4259-8b31-c630d23517aa","type":"Ray"},{"attributes":{"formatter":{"id":"9cfca949-824f-4097-ac9d-a1fe12735f36","type":"BasicTickFormatter"},"plot":{"id":"ea54921d-2d7f-48ee-a0e9-34450b487a75","type":"Plot"},"ticker":{"id":"971743c9-ede7-4019-9510-dc715fb4965f","type":"BasicTicker"}},"id":"85c71c45-e0f3-4a36-ad9d-6ab31209f520","type":"LinearAxis"}],"root_ids":["ea54921d-2d7f-48ee-a0e9-34450b487a75"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"66315d9f-69fd-4aee-b2a0-3f029e346a12","elementid":"de5aef64-9dc2-4b62-ac23-97ef3ead8f6d","modelid":"ea54921d-2d7f-48ee-a0e9-34450b487a75"}];
                
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
