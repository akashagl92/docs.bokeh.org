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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("e14f6a16-8208-4bf7-98c1-95c0834eb7ec");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e14f6a16-8208-4bf7-98c1-95c0834eb7ec' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"e1c6bd6b-eec6-4e54-8484-b1017bafc410":{"roots":{"references":[{"attributes":{"below":[{"id":"3906c3ca-e062-413b-93e8-3065c49d9fd1","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"0ee4bd26-1c51-4fdc-8c95-805cec021583","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"dc99c0bb-3291-4bd7-8d70-b37aba19f9d2","type":"GlyphRenderer"},{"id":"3906c3ca-e062-413b-93e8-3065c49d9fd1","type":"LinearAxis"},{"id":"0ee4bd26-1c51-4fdc-8c95-805cec021583","type":"LinearAxis"},{"id":"25e4eb0b-e99c-483b-8d1a-7bafac97aaf3","type":"Grid"},{"id":"91044ac7-3bc1-48c0-a03b-711b862f3120","type":"Grid"}],"title":null,"tool_events":{"id":"15d6c300-05ad-4ca1-8084-45eef7d54c93","type":"ToolEvents"},"toolbar":{"id":"c622e6a6-d364-461c-a13f-dfb10f5482d2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3e88a78a-6ff8-4c36-b423-39a12e85d482","type":"DataRange1d"},"x_scale":{"id":"b92df5da-3dea-42f8-9a52-668fb0dc5963","type":"LinearScale"},"y_range":{"id":"6a961ee2-225f-4239-bebb-6be713a642d5","type":"DataRange1d"},"y_scale":{"id":"07a2ea72-52c6-4a74-8f72-ca6746fb4ac0","type":"LinearScale"}},"id":"5ba262e0-9653-4876-8820-902f67697ad4","type":"Plot"},{"attributes":{"data_source":{"id":"4fdf481e-df32-48ff-a299-54a68a99314d","type":"ColumnDataSource"},"glyph":{"id":"015393b9-c70e-4afa-bd1a-a36c93470efc","type":"Cross"},"hover_glyph":null,"muted_glyph":null},"id":"dc99c0bb-3291-4bd7-8d70-b37aba19f9d2","type":"GlyphRenderer"},{"attributes":{},"id":"b92df5da-3dea-42f8-9a52-668fb0dc5963","type":"LinearScale"},{"attributes":{"callback":null},"id":"3e88a78a-6ff8-4c36-b423-39a12e85d482","type":"DataRange1d"},{"attributes":{"formatter":{"id":"08eca99d-3d41-483c-90e1-d642093165d1","type":"BasicTickFormatter"},"plot":{"id":"5ba262e0-9653-4876-8820-902f67697ad4","type":"Plot"},"ticker":{"id":"d25d298a-dc50-4441-9d2b-f8f4c44062d9","type":"BasicTicker"}},"id":"3906c3ca-e062-413b-93e8-3065c49d9fd1","type":"LinearAxis"},{"attributes":{},"id":"07a2ea72-52c6-4a74-8f72-ca6746fb4ac0","type":"LinearScale"},{"attributes":{},"id":"15d6c300-05ad-4ca1-8084-45eef7d54c93","type":"ToolEvents"},{"attributes":{"callback":null},"id":"6a961ee2-225f-4239-bebb-6be713a642d5","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"4fdf481e-df32-48ff-a299-54a68a99314d","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"5ba262e0-9653-4876-8820-902f67697ad4","type":"Plot"},"ticker":{"id":"293107d3-2941-4b41-af70-a6d9f41459f9","type":"BasicTicker"}},"id":"91044ac7-3bc1-48c0-a03b-711b862f3120","type":"Grid"},{"attributes":{},"id":"08eca99d-3d41-483c-90e1-d642093165d1","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"afdaa77f-da39-4bf2-a043-1cae002dde1b","type":"BasicTickFormatter"},"plot":{"id":"5ba262e0-9653-4876-8820-902f67697ad4","type":"Plot"},"ticker":{"id":"293107d3-2941-4b41-af70-a6d9f41459f9","type":"BasicTicker"}},"id":"0ee4bd26-1c51-4fdc-8c95-805cec021583","type":"LinearAxis"},{"attributes":{},"id":"afdaa77f-da39-4bf2-a043-1cae002dde1b","type":"BasicTickFormatter"},{"attributes":{},"id":"293107d3-2941-4b41-af70-a6d9f41459f9","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"015393b9-c70e-4afa-bd1a-a36c93470efc","type":"Cross"},{"attributes":{},"id":"d25d298a-dc50-4441-9d2b-f8f4c44062d9","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c622e6a6-d364-461c-a13f-dfb10f5482d2","type":"Toolbar"},{"attributes":{"plot":{"id":"5ba262e0-9653-4876-8820-902f67697ad4","type":"Plot"},"ticker":{"id":"d25d298a-dc50-4441-9d2b-f8f4c44062d9","type":"BasicTicker"}},"id":"25e4eb0b-e99c-483b-8d1a-7bafac97aaf3","type":"Grid"}],"root_ids":["5ba262e0-9653-4876-8820-902f67697ad4"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"e1c6bd6b-eec6-4e54-8484-b1017bafc410","elementid":"e14f6a16-8208-4bf7-98c1-95c0834eb7ec","modelid":"5ba262e0-9653-4876-8820-902f67697ad4"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
