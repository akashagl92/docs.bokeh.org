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
      };var element = document.getElementById("fd436661-c5d6-402d-9150-236f1d139c6d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fd436661-c5d6-402d-9150-236f1d139c6d' but no matching script tag was found. ")
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
                var docs_json = {"c1304fc5-b6e1-4583-8201-89924aedf8fc":{"roots":{"references":[{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#f0027f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"206d3a41-6c8d-48b1-98d3-4e60ee5cf96f","type":"Asterisk"},{"attributes":{"callback":null},"id":"9155bb1e-720c-48c4-86ad-62a1053c2cfc","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b6f02508-cbb0-4a58-bd69-da4e58ab3832","type":"Toolbar"},{"attributes":{},"id":"c5d0c568-8985-4ca2-be07-b9efeb4323db","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f22b1528-2000-4918-b259-7b7c40d2d5a9","type":"Plot"},"ticker":{"id":"8ecd09c8-6e41-4a5e-ba41-5566c71e3166","type":"BasicTicker"}},"id":"c8d45cbd-b742-4391-bf35-48f653ea432b","type":"Grid"},{"attributes":{},"id":"e5c6fed4-bc50-456f-9319-13276b3bd4c7","type":"ToolEvents"},{"attributes":{"callback":null},"id":"3d725d78-e878-4cd3-826e-9f3901bbc9fc","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"09466c26-8239-4eec-85ca-7c51bbb43833","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"01aeb87f-9ad9-4e9e-9196-a0b07fc17294","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b95553ca-1c48-4be7-947a-3562b1cc7ca1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"1fb60c26-35c2-4442-a9ae-652b4e9d4757","type":"GlyphRenderer"},{"id":"01aeb87f-9ad9-4e9e-9196-a0b07fc17294","type":"LinearAxis"},{"id":"b95553ca-1c48-4be7-947a-3562b1cc7ca1","type":"LinearAxis"},{"id":"c8d45cbd-b742-4391-bf35-48f653ea432b","type":"Grid"},{"id":"a86fe96c-e120-42c6-b4c9-be84f0ea4d03","type":"Grid"}],"title":null,"tool_events":{"id":"e5c6fed4-bc50-456f-9319-13276b3bd4c7","type":"ToolEvents"},"toolbar":{"id":"b6f02508-cbb0-4a58-bd69-da4e58ab3832","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9155bb1e-720c-48c4-86ad-62a1053c2cfc","type":"DataRange1d"},"y_range":{"id":"3d725d78-e878-4cd3-826e-9f3901bbc9fc","type":"DataRange1d"}},"id":"f22b1528-2000-4918-b259-7b7c40d2d5a9","type":"Plot"},{"attributes":{"formatter":{"id":"f5ed5139-1a48-494f-b2be-47fadcf21173","type":"BasicTickFormatter"},"plot":{"id":"f22b1528-2000-4918-b259-7b7c40d2d5a9","type":"Plot"},"ticker":{"id":"48bf8d2c-7d3d-42aa-9177-4488e3ea35b3","type":"BasicTicker"}},"id":"b95553ca-1c48-4be7-947a-3562b1cc7ca1","type":"LinearAxis"},{"attributes":{},"id":"8ecd09c8-6e41-4a5e-ba41-5566c71e3166","type":"BasicTicker"},{"attributes":{},"id":"48bf8d2c-7d3d-42aa-9177-4488e3ea35b3","type":"BasicTicker"},{"attributes":{"data_source":{"id":"09466c26-8239-4eec-85ca-7c51bbb43833","type":"ColumnDataSource"},"glyph":{"id":"206d3a41-6c8d-48b1-98d3-4e60ee5cf96f","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1fb60c26-35c2-4442-a9ae-652b4e9d4757","type":"GlyphRenderer"},{"attributes":{},"id":"f5ed5139-1a48-494f-b2be-47fadcf21173","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"f22b1528-2000-4918-b259-7b7c40d2d5a9","type":"Plot"},"ticker":{"id":"48bf8d2c-7d3d-42aa-9177-4488e3ea35b3","type":"BasicTicker"}},"id":"a86fe96c-e120-42c6-b4c9-be84f0ea4d03","type":"Grid"},{"attributes":{"formatter":{"id":"c5d0c568-8985-4ca2-be07-b9efeb4323db","type":"BasicTickFormatter"},"plot":{"id":"f22b1528-2000-4918-b259-7b7c40d2d5a9","type":"Plot"},"ticker":{"id":"8ecd09c8-6e41-4a5e-ba41-5566c71e3166","type":"BasicTicker"}},"id":"01aeb87f-9ad9-4e9e-9196-a0b07fc17294","type":"LinearAxis"}],"root_ids":["f22b1528-2000-4918-b259-7b7c40d2d5a9"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"c1304fc5-b6e1-4583-8201-89924aedf8fc","elementid":"fd436661-c5d6-402d-9150-236f1d139c6d","modelid":"f22b1528-2000-4918-b259-7b7c40d2d5a9"}];
                
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
