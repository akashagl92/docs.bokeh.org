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
      };var element = document.getElementById("10feb806-6bcd-4cf6-8bf2-23d12ee296ec");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '10feb806-6bcd-4cf6-8bf2-23d12ee296ec' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"20142fad-090a-4089-b549-ee6b337a79d8":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"2604bbeb-cc89-4e67-8243-f7f5da1ad6a3","type":"ColumnDataSource"},{"attributes":{},"id":"001399d5-0ec7-49b3-8595-a68317576314","type":"HelpTool"},{"attributes":{"data_source":{"id":"2604bbeb-cc89-4e67-8243-f7f5da1ad6a3","type":"ColumnDataSource"},"glyph":{"id":"540ae0e7-cca9-4867-9b8d-53db512502ae","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"328dcd4b-a327-4c62-8bb1-5a63b95d396c","type":"Circle"},"selection_glyph":null,"view":{"id":"ae884eec-0580-44c4-a9fb-e30096bc7715","type":"CDSView"}},"id":"517dcb07-b24a-4d2e-b1f8-7c88b62e7384","type":"GlyphRenderer"},{"attributes":{},"id":"e989ae31-cd2d-47c3-a0da-b0d9b1aa0c14","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"518bbde7-3fea-433e-b43f-ca32f0bd5d21","type":"PanTool"},{"id":"7e03e2e8-a19d-4a9b-9b90-fb7a90fadd68","type":"WheelZoomTool"},{"id":"61a41810-a67c-421b-a21b-c30b3e7b6a07","type":"BoxZoomTool"},{"id":"e989ae31-cd2d-47c3-a0da-b0d9b1aa0c14","type":"SaveTool"},{"id":"07cc3658-1365-4383-a95e-6511b84518d9","type":"ResetTool"},{"id":"001399d5-0ec7-49b3-8595-a68317576314","type":"HelpTool"}]},"id":"f8fa191a-a362-4c6b-8008-4850f2a66535","type":"Toolbar"},{"attributes":{"formatter":{"id":"256127e1-30e9-4047-a4d0-7334e4595b94","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"a1047ebf-8ea1-4437-a329-661e1a9ca60c","subtype":"Figure","type":"Plot"},"ticker":{"id":"b86d6836-6d72-4704-bd0d-c5205ccfffa5","type":"BasicTicker"}},"id":"765a3cf5-9073-4a99-a22e-a51fe0245f44","type":"LinearAxis"},{"attributes":{},"id":"695f2149-58b7-459d-9651-32adc8128459","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0ad9f5f7-75d6-4a00-8142-0d64e951c326","type":"BoxAnnotation"},{"attributes":{},"id":"518bbde7-3fea-433e-b43f-ca32f0bd5d21","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"a1047ebf-8ea1-4437-a329-661e1a9ca60c","subtype":"Figure","type":"Plot"},"ticker":{"id":"b86d6836-6d72-4704-bd0d-c5205ccfffa5","type":"BasicTicker"}},"id":"6efa811f-6650-4d6d-af8a-c7ce6794527f","type":"Grid"},{"attributes":{},"id":"7e03e2e8-a19d-4a9b-9b90-fb7a90fadd68","type":"WheelZoomTool"},{"attributes":{},"id":"40ac267b-fcad-4d4c-a375-775661fbab51","type":"LinearScale"},{"attributes":{},"id":"b86d6836-6d72-4704-bd0d-c5205ccfffa5","type":"BasicTicker"},{"attributes":{"formatter":{"id":"31dd46a1-99b9-45a4-8de6-67171b55804c","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"a1047ebf-8ea1-4437-a329-661e1a9ca60c","subtype":"Figure","type":"Plot"},"ticker":{"id":"695f2149-58b7-459d-9651-32adc8128459","type":"BasicTicker"}},"id":"ba765580-bd4a-46d3-a1a7-ff9962494369","type":"LinearAxis"},{"attributes":{"overlay":{"id":"0ad9f5f7-75d6-4a00-8142-0d64e951c326","type":"BoxAnnotation"}},"id":"61a41810-a67c-421b-a21b-c30b3e7b6a07","type":"BoxZoomTool"},{"attributes":{},"id":"7e69548d-82ea-41c6-827e-ca9067e4ae34","type":"LinearScale"},{"attributes":{"below":[{"id":"ba765580-bd4a-46d3-a1a7-ff9962494369","type":"LinearAxis"}],"left":[{"id":"765a3cf5-9073-4a99-a22e-a51fe0245f44","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ba765580-bd4a-46d3-a1a7-ff9962494369","type":"LinearAxis"},{"id":"18653ec2-a6ec-4e3f-a3ac-eb0a1580768a","type":"Grid"},{"id":"765a3cf5-9073-4a99-a22e-a51fe0245f44","type":"LinearAxis"},{"id":"6efa811f-6650-4d6d-af8a-c7ce6794527f","type":"Grid"},{"id":"0ad9f5f7-75d6-4a00-8142-0d64e951c326","type":"BoxAnnotation"},{"id":"517dcb07-b24a-4d2e-b1f8-7c88b62e7384","type":"GlyphRenderer"}],"title":{"id":"7d44aef2-c5fc-4b2e-b9b9-684bf6a76d14","type":"Title"},"toolbar":{"id":"f8fa191a-a362-4c6b-8008-4850f2a66535","type":"Toolbar"},"x_range":{"id":"c40b1430-1967-4d4c-8a23-4110effd9fa9","type":"DataRange1d"},"x_scale":{"id":"40ac267b-fcad-4d4c-a375-775661fbab51","type":"LinearScale"},"y_range":{"id":"44e64700-cd6f-4576-b739-242c19f29c05","type":"DataRange1d"},"y_scale":{"id":"7e69548d-82ea-41c6-827e-ca9067e4ae34","type":"LinearScale"}},"id":"a1047ebf-8ea1-4437-a329-661e1a9ca60c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"7d44aef2-c5fc-4b2e-b9b9-684bf6a76d14","type":"Title"},{"attributes":{},"id":"256127e1-30e9-4047-a4d0-7334e4595b94","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2604bbeb-cc89-4e67-8243-f7f5da1ad6a3","type":"ColumnDataSource"}},"id":"ae884eec-0580-44c4-a9fb-e30096bc7715","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"540ae0e7-cca9-4867-9b8d-53db512502ae","type":"Circle"},{"attributes":{"callback":null},"id":"c40b1430-1967-4d4c-8a23-4110effd9fa9","type":"DataRange1d"},{"attributes":{"plot":{"id":"a1047ebf-8ea1-4437-a329-661e1a9ca60c","subtype":"Figure","type":"Plot"},"ticker":{"id":"695f2149-58b7-459d-9651-32adc8128459","type":"BasicTicker"}},"id":"18653ec2-a6ec-4e3f-a3ac-eb0a1580768a","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"328dcd4b-a327-4c62-8bb1-5a63b95d396c","type":"Circle"},{"attributes":{},"id":"07cc3658-1365-4383-a95e-6511b84518d9","type":"ResetTool"},{"attributes":{"callback":null},"id":"44e64700-cd6f-4576-b739-242c19f29c05","type":"DataRange1d"},{"attributes":{},"id":"31dd46a1-99b9-45a4-8de6-67171b55804c","type":"BasicTickFormatter"}],"root_ids":["a1047ebf-8ea1-4437-a329-661e1a9ca60c"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"20142fad-090a-4089-b549-ee6b337a79d8","elementid":"10feb806-6bcd-4cf6-8bf2-23d12ee296ec","modelid":"a1047ebf-8ea1-4437-a329-661e1a9ca60c"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
