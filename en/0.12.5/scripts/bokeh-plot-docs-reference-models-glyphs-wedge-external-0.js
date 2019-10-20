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
      };var element = document.getElementById("c20bd200-0d3b-4307-b41a-dc449eefde4b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c20bd200-0d3b-4307-b41a-dc449eefde4b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"a82d40c5-3b1e-4fe8-a61d-7e29826d4fbd":{"roots":{"references":[{"attributes":{"callback":null},"id":"e6984f59-de1c-4a03-8764-cc88f18b569a","type":"DataRange1d"},{"attributes":{},"id":"5b805b91-1135-405e-b17b-b0f2473cf463","type":"ToolEvents"},{"attributes":{"callback":null},"id":"b920c212-ffd9-4bff-b97e-28b3fb60b320","type":"DataRange1d"},{"attributes":{"formatter":{"id":"e28961ed-ae6c-4c8c-81fa-112969b64294","type":"BasicTickFormatter"},"plot":{"id":"44fdea96-03a2-4785-a609-403b68169d0e","type":"Plot"},"ticker":{"id":"f6911565-8da6-453c-83a2-426eabd90409","type":"BasicTicker"}},"id":"5547db97-7520-49ef-9926-acd3cedf8404","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","r"],"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"8a52bbd0-9464-48d5-bfd1-daa17f22105b","type":"ColumnDataSource"},{"attributes":{},"id":"586474c0-0cff-420c-b0cc-bfb70be5e415","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"075a9c87-f5ce-4ffd-9a3b-6b2e7995b79a","type":"Toolbar"},{"attributes":{"below":[{"id":"5547db97-7520-49ef-9926-acd3cedf8404","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"496ee268-7efb-4d6b-b19c-7d75f4e303a4","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a12aa6d1-c8d1-48d0-be56-10fb65f57adb","type":"GlyphRenderer"},{"id":"5547db97-7520-49ef-9926-acd3cedf8404","type":"LinearAxis"},{"id":"496ee268-7efb-4d6b-b19c-7d75f4e303a4","type":"LinearAxis"},{"id":"4b8d838b-3aa0-4010-981d-b070ccb648e3","type":"Grid"},{"id":"ac6fe6c1-a9f0-4045-8dc3-3f8db7181027","type":"Grid"}],"title":null,"tool_events":{"id":"5b805b91-1135-405e-b17b-b0f2473cf463","type":"ToolEvents"},"toolbar":{"id":"075a9c87-f5ce-4ffd-9a3b-6b2e7995b79a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b920c212-ffd9-4bff-b97e-28b3fb60b320","type":"DataRange1d"},"y_range":{"id":"e6984f59-de1c-4a03-8764-cc88f18b569a","type":"DataRange1d"}},"id":"44fdea96-03a2-4785-a609-403b68169d0e","type":"Plot"},{"attributes":{},"id":"e28961ed-ae6c-4c8c-81fa-112969b64294","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8a52bbd0-9464-48d5-bfd1-daa17f22105b","type":"ColumnDataSource"},"glyph":{"id":"a705f375-5972-4c68-8e35-ad9fa9ab4fe1","type":"Wedge"},"hover_glyph":null,"muted_glyph":null},"id":"a12aa6d1-c8d1-48d0-be56-10fb65f57adb","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"586474c0-0cff-420c-b0cc-bfb70be5e415","type":"BasicTickFormatter"},"plot":{"id":"44fdea96-03a2-4785-a609-403b68169d0e","type":"Plot"},"ticker":{"id":"8f9bf88e-c2b9-4fe5-86dc-1c5177bad678","type":"BasicTicker"}},"id":"496ee268-7efb-4d6b-b19c-7d75f4e303a4","type":"LinearAxis"},{"attributes":{"plot":{"id":"44fdea96-03a2-4785-a609-403b68169d0e","type":"Plot"},"ticker":{"id":"f6911565-8da6-453c-83a2-426eabd90409","type":"BasicTicker"}},"id":"4b8d838b-3aa0-4010-981d-b070ccb648e3","type":"Grid"},{"attributes":{},"id":"8f9bf88e-c2b9-4fe5-86dc-1c5177bad678","type":"BasicTicker"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#B3DE69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"a705f375-5972-4c68-8e35-ad9fa9ab4fe1","type":"Wedge"},{"attributes":{"dimension":1,"plot":{"id":"44fdea96-03a2-4785-a609-403b68169d0e","type":"Plot"},"ticker":{"id":"8f9bf88e-c2b9-4fe5-86dc-1c5177bad678","type":"BasicTicker"}},"id":"ac6fe6c1-a9f0-4045-8dc3-3f8db7181027","type":"Grid"},{"attributes":{},"id":"f6911565-8da6-453c-83a2-426eabd90409","type":"BasicTicker"}],"root_ids":["44fdea96-03a2-4785-a609-403b68169d0e"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"a82d40c5-3b1e-4fe8-a61d-7e29826d4fbd","elementid":"c20bd200-0d3b-4307-b41a-dc449eefde4b","modelid":"44fdea96-03a2-4785-a609-403b68169d0e"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
