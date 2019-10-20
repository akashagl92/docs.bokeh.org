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
      };var element = document.getElementById("8788bb3c-7f10-4def-952a-3f63d2bbcc2f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8788bb3c-7f10-4def-952a-3f63d2bbcc2f' but no matching script tag was found. ")
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
                var docs_json = {"6f9adae3-01fb-4867-88d8-e92f6c7efbe6":{"roots":{"references":[{"attributes":{},"id":"76712dc9-718f-4c12-b61c-d41f24bd01b7","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"f46f7235-6fc2-4022-ba81-f378a86dbe0f","type":"Title"},{"attributes":{},"id":"952c8f11-b92b-40ce-a0d4-ef7c85678d4a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e42454aa-842b-4511-aece-41c23420ba42","subtype":"Figure","type":"Plot"}},"id":"9fb9be20-b37e-4842-8089-ce45dfcc0bcb","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"e42454aa-842b-4511-aece-41c23420ba42","subtype":"Figure","type":"Plot"}},"id":"3fb75181-0925-41fe-b128-4a6048159e36","type":"SaveTool"},{"attributes":{"plot":{"id":"e42454aa-842b-4511-aece-41c23420ba42","subtype":"Figure","type":"Plot"}},"id":"b79a43b4-4bdf-4a02-9c71-4e7d5b5678eb","type":"ResetTool"},{"attributes":{},"id":"f4d0dda1-369a-482d-9f4b-6e26f2a74772","type":"BasicTicker"},{"attributes":{"plot":{"id":"e42454aa-842b-4511-aece-41c23420ba42","subtype":"Figure","type":"Plot"}},"id":"3e173ea3-642e-4e77-a0fe-578c281811e9","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6c3e3e33-dfab-47ac-bada-17fd14955c28","type":"ColumnDataSource"},{"attributes":{},"id":"041298a1-fa01-4da0-9208-3d605866de41","type":"ToolEvents"},{"attributes":{"formatter":{"id":"76712dc9-718f-4c12-b61c-d41f24bd01b7","type":"BasicTickFormatter"},"plot":{"id":"e42454aa-842b-4511-aece-41c23420ba42","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4d0dda1-369a-482d-9f4b-6e26f2a74772","type":"BasicTicker"}},"id":"cd3842e6-3837-491d-83e1-d94be40584c0","type":"LinearAxis"},{"attributes":{"formatter":{"id":"952c8f11-b92b-40ce-a0d4-ef7c85678d4a","type":"BasicTickFormatter"},"plot":{"id":"e42454aa-842b-4511-aece-41c23420ba42","subtype":"Figure","type":"Plot"},"ticker":{"id":"51e694a5-3808-49cd-8dca-5742e6e1026d","type":"BasicTicker"}},"id":"4175fef1-0f27-46e2-8eab-68d585f36b94","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"02a15903-6cd5-4e72-8fdf-25101e2e280b","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"774ea908-d0ca-48b0-aa23-04e9b515dbe1","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3e173ea3-642e-4e77-a0fe-578c281811e9","type":"PanTool"},{"id":"9fb9be20-b37e-4842-8089-ce45dfcc0bcb","type":"WheelZoomTool"},{"id":"5c3d0a5b-e076-4d19-be34-24881eb97f27","type":"BoxZoomTool"},{"id":"3fb75181-0925-41fe-b128-4a6048159e36","type":"SaveTool"},{"id":"b79a43b4-4bdf-4a02-9c71-4e7d5b5678eb","type":"ResetTool"},{"id":"896f4eba-bc54-4136-a562-8e06e72393fb","type":"HelpTool"}]},"id":"df11063f-2e44-41c7-a4c4-29eb243bd902","type":"Toolbar"},{"attributes":{"plot":{"id":"e42454aa-842b-4511-aece-41c23420ba42","subtype":"Figure","type":"Plot"}},"id":"896f4eba-bc54-4136-a562-8e06e72393fb","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b60ad57f-06fd-47e8-81d2-de8d3c164cd7","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"e42454aa-842b-4511-aece-41c23420ba42","subtype":"Figure","type":"Plot"},"ticker":{"id":"51e694a5-3808-49cd-8dca-5742e6e1026d","type":"BasicTicker"}},"id":"eeef1e77-da49-45f9-8a64-b4437e4ad027","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c98bcc8f-b9d3-4cf9-8caf-ed0e1f2e11ac","type":"Circle"},{"attributes":{"below":[{"id":"cd3842e6-3837-491d-83e1-d94be40584c0","type":"LinearAxis"}],"border_fill_color":{"value":"whitesmoke"},"left":[{"id":"4175fef1-0f27-46e2-8eab-68d585f36b94","type":"LinearAxis"}],"min_border_left":80,"plot_height":400,"plot_width":400,"renderers":[{"id":"cd3842e6-3837-491d-83e1-d94be40584c0","type":"LinearAxis"},{"id":"48a4da86-9ea2-423c-a409-b48fd80910b5","type":"Grid"},{"id":"4175fef1-0f27-46e2-8eab-68d585f36b94","type":"LinearAxis"},{"id":"eeef1e77-da49-45f9-8a64-b4437e4ad027","type":"Grid"},{"id":"02a15903-6cd5-4e72-8fdf-25101e2e280b","type":"BoxAnnotation"},{"id":"f4490302-4c14-410e-a557-cd9c9ab13acd","type":"GlyphRenderer"}],"title":{"id":"f46f7235-6fc2-4022-ba81-f378a86dbe0f","type":"Title"},"tool_events":{"id":"041298a1-fa01-4da0-9208-3d605866de41","type":"ToolEvents"},"toolbar":{"id":"df11063f-2e44-41c7-a4c4-29eb243bd902","type":"Toolbar"},"x_range":{"id":"774ea908-d0ca-48b0-aa23-04e9b515dbe1","type":"DataRange1d"},"y_range":{"id":"545687e5-54a4-4a0b-90b7-2f81997c6b0a","type":"DataRange1d"}},"id":"e42454aa-842b-4511-aece-41c23420ba42","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"6c3e3e33-dfab-47ac-bada-17fd14955c28","type":"ColumnDataSource"},"glyph":{"id":"c98bcc8f-b9d3-4cf9-8caf-ed0e1f2e11ac","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b60ad57f-06fd-47e8-81d2-de8d3c164cd7","type":"Circle"},"selection_glyph":null},"id":"f4490302-4c14-410e-a557-cd9c9ab13acd","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"545687e5-54a4-4a0b-90b7-2f81997c6b0a","type":"DataRange1d"},{"attributes":{"overlay":{"id":"02a15903-6cd5-4e72-8fdf-25101e2e280b","type":"BoxAnnotation"},"plot":{"id":"e42454aa-842b-4511-aece-41c23420ba42","subtype":"Figure","type":"Plot"}},"id":"5c3d0a5b-e076-4d19-be34-24881eb97f27","type":"BoxZoomTool"},{"attributes":{},"id":"51e694a5-3808-49cd-8dca-5742e6e1026d","type":"BasicTicker"},{"attributes":{"plot":{"id":"e42454aa-842b-4511-aece-41c23420ba42","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4d0dda1-369a-482d-9f4b-6e26f2a74772","type":"BasicTicker"}},"id":"48a4da86-9ea2-423c-a409-b48fd80910b5","type":"Grid"}],"root_ids":["e42454aa-842b-4511-aece-41c23420ba42"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"6f9adae3-01fb-4867-88d8-e92f6c7efbe6","elementid":"8788bb3c-7f10-4def-952a-3f63d2bbcc2f","modelid":"e42454aa-842b-4511-aece-41c23420ba42"}];
                
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
