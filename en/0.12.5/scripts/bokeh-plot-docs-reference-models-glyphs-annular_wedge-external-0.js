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
      };var element = document.getElementById("acf470fd-1670-41b3-bf78-ce5ddc9a2b09");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'acf470fd-1670-41b3-bf78-ce5ddc9a2b09' but no matching script tag was found. ")
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
                var docs_json = {"81c7a898-7c4c-45a1-9e67-656698b628da":{"roots":{"references":[{"attributes":{"below":[{"id":"01e025e0-db67-492b-bbd9-ec730dfe79c2","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f7ff93ae-e44a-44ac-b1be-147d8c36ae9c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3a7baffc-7a7e-40c8-890e-3e35e134eba3","type":"GlyphRenderer"},{"id":"01e025e0-db67-492b-bbd9-ec730dfe79c2","type":"LinearAxis"},{"id":"f7ff93ae-e44a-44ac-b1be-147d8c36ae9c","type":"LinearAxis"},{"id":"c001dc4f-f0b4-474f-b4fc-a15a62f69ab4","type":"Grid"},{"id":"f48167eb-80ea-49c1-a67b-3dcf391110ab","type":"Grid"}],"title":null,"tool_events":{"id":"c431ac65-35b0-46cd-92d7-917b2814139d","type":"ToolEvents"},"toolbar":{"id":"f2a90526-c447-4122-9b33-5a2137c5d14b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"03662987-bfe3-4eb4-94e2-197f433a985a","type":"DataRange1d"},"y_range":{"id":"1fd9dfe3-4c79-458b-b3a4-eeff60bc15b9","type":"DataRange1d"}},"id":"300dc172-8247-4cf8-b05f-8531df835ab7","type":"Plot"},{"attributes":{"formatter":{"id":"4459886a-a43c-4cfc-915e-cd01984cf4e4","type":"BasicTickFormatter"},"plot":{"id":"300dc172-8247-4cf8-b05f-8531df835ab7","type":"Plot"},"ticker":{"id":"1ab5b2f3-8f47-4ba4-b9f9-508cec7a1719","type":"BasicTicker"}},"id":"f7ff93ae-e44a-44ac-b1be-147d8c36ae9c","type":"LinearAxis"},{"attributes":{},"id":"e9e485eb-fb26-418d-a1fd-50d531b70860","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e9e485eb-fb26-418d-a1fd-50d531b70860","type":"BasicTickFormatter"},"plot":{"id":"300dc172-8247-4cf8-b05f-8531df835ab7","type":"Plot"},"ticker":{"id":"2e0c0f33-9c8d-43d2-ab2c-d46049428d90","type":"BasicTicker"}},"id":"01e025e0-db67-492b-bbd9-ec730dfe79c2","type":"LinearAxis"},{"attributes":{"callback":null},"id":"1fd9dfe3-4c79-458b-b3a4-eeff60bc15b9","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"300dc172-8247-4cf8-b05f-8531df835ab7","type":"Plot"},"ticker":{"id":"1ab5b2f3-8f47-4ba4-b9f9-508cec7a1719","type":"BasicTicker"}},"id":"f48167eb-80ea-49c1-a67b-3dcf391110ab","type":"Grid"},{"attributes":{},"id":"2e0c0f33-9c8d-43d2-ab2c-d46049428d90","type":"BasicTicker"},{"attributes":{"callback":null},"id":"03662987-bfe3-4eb4-94e2-197f433a985a","type":"DataRange1d"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdd0afa3-3dd7-41b4-bd4c-e4de8c44df44","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"b755f5f3-143a-4646-bacd-fd0d57a17ef7","type":"ColumnDataSource"},"glyph":{"id":"cdd0afa3-3dd7-41b4-bd4c-e4de8c44df44","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null},"id":"3a7baffc-7a7e-40c8-890e-3e35e134eba3","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f2a90526-c447-4122-9b33-5a2137c5d14b","type":"Toolbar"},{"attributes":{},"id":"4459886a-a43c-4cfc-915e-cd01984cf4e4","type":"BasicTickFormatter"},{"attributes":{},"id":"c431ac65-35b0-46cd-92d7-917b2814139d","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x","y","r"],"data":{"r":{"__ndarray__":"393d3d3dzT+amZmZmZnRP0VERERERNQ/7+7u7u7u1j+amZmZmZnZP0VERERERNw/7+7u7u7u3j/NzMzMzMzgPyIiIiIiIuI/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"b755f5f3-143a-4646-bacd-fd0d57a17ef7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"300dc172-8247-4cf8-b05f-8531df835ab7","type":"Plot"},"ticker":{"id":"2e0c0f33-9c8d-43d2-ab2c-d46049428d90","type":"BasicTicker"}},"id":"c001dc4f-f0b4-474f-b4fc-a15a62f69ab4","type":"Grid"},{"attributes":{},"id":"1ab5b2f3-8f47-4ba4-b9f9-508cec7a1719","type":"BasicTicker"}],"root_ids":["300dc172-8247-4cf8-b05f-8531df835ab7"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"81c7a898-7c4c-45a1-9e67-656698b628da","elementid":"acf470fd-1670-41b3-bf78-ce5ddc9a2b09","modelid":"300dc172-8247-4cf8-b05f-8531df835ab7"}];
                
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
