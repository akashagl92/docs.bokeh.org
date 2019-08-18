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
      };var element = document.getElementById("e0a6989a-6cbf-49eb-b530-1804a58781dd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e0a6989a-6cbf-49eb-b530-1804a58781dd' but no matching script tag was found. ")
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
                var docs_json = {"d97b5de2-b514-4824-b04a-096c5585c591":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","r","y"],"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"368714be-d8cb-4ad4-9505-46af55a10ad0","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"8021d6c0-183b-4d1f-aa5f-437772b54e11","type":"Plot"},"ticker":{"id":"8ae81189-8bc7-4a18-b415-18b34b338743","type":"BasicTicker"}},"id":"c6c4b7bf-3e57-4974-975b-d7e0bc7e1229","type":"Grid"},{"attributes":{},"id":"8ae81189-8bc7-4a18-b415-18b34b338743","type":"BasicTicker"},{"attributes":{"formatter":{"id":"005c3f42-13a4-4e35-8a05-b02babb83f1f","type":"BasicTickFormatter"},"plot":{"id":"8021d6c0-183b-4d1f-aa5f-437772b54e11","type":"Plot"},"ticker":{"id":"d8f607b1-1154-471c-a84e-22f9386ee790","type":"BasicTicker"}},"id":"a9d887ea-ebe2-447a-9d43-062f7a42f5f7","type":"LinearAxis"},{"attributes":{},"id":"005c3f42-13a4-4e35-8a05-b02babb83f1f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"770ae32b-08ad-4d83-8820-780583966128","type":"BasicTickFormatter"},"plot":{"id":"8021d6c0-183b-4d1f-aa5f-437772b54e11","type":"Plot"},"ticker":{"id":"8ae81189-8bc7-4a18-b415-18b34b338743","type":"BasicTicker"}},"id":"fa3e6d25-057e-4260-bb20-ef4bcac12b38","type":"LinearAxis"},{"attributes":{},"id":"d8f607b1-1154-471c-a84e-22f9386ee790","type":"BasicTicker"},{"attributes":{},"id":"770ae32b-08ad-4d83-8820-780583966128","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"368714be-d8cb-4ad4-9505-46af55a10ad0","type":"ColumnDataSource"},"glyph":{"id":"91530b71-2766-42bc-807f-b298343098fe","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"72d267d7-67fa-44d3-96e1-08f6c761dac5","type":"GlyphRenderer"},{"attributes":{},"id":"605b6e98-1bff-4329-b247-347a0330db51","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ed57642a-90b8-4cb2-b7f1-bfcfda394c26","type":"Toolbar"},{"attributes":{"plot":{"id":"8021d6c0-183b-4d1f-aa5f-437772b54e11","type":"Plot"},"ticker":{"id":"d8f607b1-1154-471c-a84e-22f9386ee790","type":"BasicTicker"}},"id":"0b0ed821-893f-47d2-9be1-a7d7e9c2fd5c","type":"Grid"},{"attributes":{"below":[{"id":"a9d887ea-ebe2-447a-9d43-062f7a42f5f7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"fa3e6d25-057e-4260-bb20-ef4bcac12b38","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"72d267d7-67fa-44d3-96e1-08f6c761dac5","type":"GlyphRenderer"},{"id":"a9d887ea-ebe2-447a-9d43-062f7a42f5f7","type":"LinearAxis"},{"id":"fa3e6d25-057e-4260-bb20-ef4bcac12b38","type":"LinearAxis"},{"id":"0b0ed821-893f-47d2-9be1-a7d7e9c2fd5c","type":"Grid"},{"id":"c6c4b7bf-3e57-4974-975b-d7e0bc7e1229","type":"Grid"}],"title":null,"tool_events":{"id":"605b6e98-1bff-4329-b247-347a0330db51","type":"ToolEvents"},"toolbar":{"id":"ed57642a-90b8-4cb2-b7f1-bfcfda394c26","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c071f24d-5f69-4964-bf5d-0b93d5b9001f","type":"DataRange1d"},"y_range":{"id":"ad51a415-03cc-44d6-9518-3015da0e69c6","type":"DataRange1d"}},"id":"8021d6c0-183b-4d1f-aa5f-437772b54e11","type":"Plot"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#B3DE69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"91530b71-2766-42bc-807f-b298343098fe","type":"Wedge"},{"attributes":{"callback":null},"id":"c071f24d-5f69-4964-bf5d-0b93d5b9001f","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ad51a415-03cc-44d6-9518-3015da0e69c6","type":"DataRange1d"}],"root_ids":["8021d6c0-183b-4d1f-aa5f-437772b54e11"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"d97b5de2-b514-4824-b04a-096c5585c591","elementid":"e0a6989a-6cbf-49eb-b530-1804a58781dd","modelid":"8021d6c0-183b-4d1f-aa5f-437772b54e11"}];
                
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
