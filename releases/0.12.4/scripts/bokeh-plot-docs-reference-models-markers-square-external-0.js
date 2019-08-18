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
      };var element = document.getElementById("dbdd9e82-f39d-4477-a1de-41fcc44eeebe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dbdd9e82-f39d-4477-a1de-41fcc44eeebe' but no matching script tag was found. ")
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
                var docs_json = {"73fa70f0-ca5b-4748-a943-eb20365d5341":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"21c1674f-261c-4e2d-9af9-cd3fe740df1a","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"2811454b-215f-4f3d-8753-db2e593f26c6","type":"DataRange1d"},{"attributes":{},"id":"5e8f2ee2-9c72-415a-a876-9ffd7b93b1b8","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"e6729ede-4dc3-4c3c-8134-1291f5678b69","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a1f91e80-b5b8-4138-98f8-b60b9a3d51da","type":"Square"},{"attributes":{},"id":"659a67de-5821-4711-9dca-ed5195c7b590","type":"BasicTicker"},{"attributes":{"plot":{"id":"eb0e5fec-7b52-4d5f-b2a9-ba9e2490619e","type":"Plot"},"ticker":{"id":"659a67de-5821-4711-9dca-ed5195c7b590","type":"BasicTicker"}},"id":"f5311733-3a97-4250-a692-976e3db1ec29","type":"Grid"},{"attributes":{"formatter":{"id":"ba9728c4-ad45-49fa-af8f-edb2461626de","type":"BasicTickFormatter"},"plot":{"id":"eb0e5fec-7b52-4d5f-b2a9-ba9e2490619e","type":"Plot"},"ticker":{"id":"bb6c7219-f362-4d4c-abf5-59cdcfba55e7","type":"BasicTicker"}},"id":"ea66c7d2-3b23-42e5-9a9a-cc77a8200ed5","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"eb0e5fec-7b52-4d5f-b2a9-ba9e2490619e","type":"Plot"},"ticker":{"id":"bb6c7219-f362-4d4c-abf5-59cdcfba55e7","type":"BasicTicker"}},"id":"accfa24e-199e-42e4-8b2a-77efaefa9e68","type":"Grid"},{"attributes":{},"id":"ba9728c4-ad45-49fa-af8f-edb2461626de","type":"BasicTickFormatter"},{"attributes":{},"id":"e02d5c20-9119-4135-bdc7-a75f2b41f080","type":"ToolEvents"},{"attributes":{"below":[{"id":"2ca7d971-b84d-40d2-8446-5182493fc878","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ea66c7d2-3b23-42e5-9a9a-cc77a8200ed5","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a48f6257-ad31-4608-a5b5-8ceb2bbd60c3","type":"GlyphRenderer"},{"id":"2ca7d971-b84d-40d2-8446-5182493fc878","type":"LinearAxis"},{"id":"ea66c7d2-3b23-42e5-9a9a-cc77a8200ed5","type":"LinearAxis"},{"id":"f5311733-3a97-4250-a692-976e3db1ec29","type":"Grid"},{"id":"accfa24e-199e-42e4-8b2a-77efaefa9e68","type":"Grid"}],"title":null,"tool_events":{"id":"e02d5c20-9119-4135-bdc7-a75f2b41f080","type":"ToolEvents"},"toolbar":{"id":"e30b6fe2-4237-4162-ac56-c3ee55b1573a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2811454b-215f-4f3d-8753-db2e593f26c6","type":"DataRange1d"},"y_range":{"id":"e6729ede-4dc3-4c3c-8134-1291f5678b69","type":"DataRange1d"}},"id":"eb0e5fec-7b52-4d5f-b2a9-ba9e2490619e","type":"Plot"},{"attributes":{"data_source":{"id":"21c1674f-261c-4e2d-9af9-cd3fe740df1a","type":"ColumnDataSource"},"glyph":{"id":"a1f91e80-b5b8-4138-98f8-b60b9a3d51da","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a48f6257-ad31-4608-a5b5-8ceb2bbd60c3","type":"GlyphRenderer"},{"attributes":{},"id":"bb6c7219-f362-4d4c-abf5-59cdcfba55e7","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e30b6fe2-4237-4162-ac56-c3ee55b1573a","type":"Toolbar"},{"attributes":{"formatter":{"id":"5e8f2ee2-9c72-415a-a876-9ffd7b93b1b8","type":"BasicTickFormatter"},"plot":{"id":"eb0e5fec-7b52-4d5f-b2a9-ba9e2490619e","type":"Plot"},"ticker":{"id":"659a67de-5821-4711-9dca-ed5195c7b590","type":"BasicTicker"}},"id":"2ca7d971-b84d-40d2-8446-5182493fc878","type":"LinearAxis"}],"root_ids":["eb0e5fec-7b52-4d5f-b2a9-ba9e2490619e"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"73fa70f0-ca5b-4748-a943-eb20365d5341","elementid":"dbdd9e82-f39d-4477-a1de-41fcc44eeebe","modelid":"eb0e5fec-7b52-4d5f-b2a9-ba9e2490619e"}];
                
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
