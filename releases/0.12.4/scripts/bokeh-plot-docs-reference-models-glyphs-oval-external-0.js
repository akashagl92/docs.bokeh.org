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
      };var element = document.getElementById("e11a7829-08ff-4d3e-8569-8af52ef99bd6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e11a7829-08ff-4d3e-8569-8af52ef99bd6' but no matching script tag was found. ")
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
                var docs_json = {"33f6f216-85b6-435f-bb37-4a6e8e358d63":{"roots":{"references":[{"attributes":{"data_source":{"id":"8cc3ef83-f98f-413a-a034-87c8508e99f0","type":"ColumnDataSource"},"glyph":{"id":"acca5cdb-dfac-4211-ac86-878c6637336d","type":"Oval"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"82b374f0-6233-4b79-a10c-a7ca718c4e50","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9f5f4e34-1a7f-4ac6-a97c-55b7203c2045","type":"Toolbar"},{"attributes":{"callback":null},"id":"2beb0d9e-2f89-47de-93d7-cd1cb0e4c23d","type":"DataRange1d"},{"attributes":{"below":[{"id":"9cbbbeb8-b553-4a8c-94ba-26ddfde5d197","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9496f07f-9fbe-499d-9662-3d0d7f849073","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"82b374f0-6233-4b79-a10c-a7ca718c4e50","type":"GlyphRenderer"},{"id":"9cbbbeb8-b553-4a8c-94ba-26ddfde5d197","type":"LinearAxis"},{"id":"9496f07f-9fbe-499d-9662-3d0d7f849073","type":"LinearAxis"},{"id":"ad34256d-99b4-49b4-9283-ec64413d9ec8","type":"Grid"},{"id":"4c3ab6d2-7eef-4653-baa3-22f3fe9e22c4","type":"Grid"}],"title":null,"tool_events":{"id":"e1d124a2-dfff-4d15-861c-8cd1a00af338","type":"ToolEvents"},"toolbar":{"id":"9f5f4e34-1a7f-4ac6-a97c-55b7203c2045","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2beb0d9e-2f89-47de-93d7-cd1cb0e4c23d","type":"DataRange1d"},"y_range":{"id":"04f10f61-6bcf-4446-ab3a-614b81f5af0c","type":"DataRange1d"}},"id":"a00bc6e4-234c-4b0d-beb6-df49c7a988df","type":"Plot"},{"attributes":{},"id":"14e4a181-96eb-417c-be02-b1eaf8c1b667","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"a00bc6e4-234c-4b0d-beb6-df49c7a988df","type":"Plot"},"ticker":{"id":"55bbeb7f-0715-46c3-8e8c-0598b99260d3","type":"BasicTicker"}},"id":"4c3ab6d2-7eef-4653-baa3-22f3fe9e22c4","type":"Grid"},{"attributes":{},"id":"55bbeb7f-0715-46c3-8e8c-0598b99260d3","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8ee9d12c-5e4e-4d91-aa1e-e77c26a221df","type":"BasicTickFormatter"},"plot":{"id":"a00bc6e4-234c-4b0d-beb6-df49c7a988df","type":"Plot"},"ticker":{"id":"55bbeb7f-0715-46c3-8e8c-0598b99260d3","type":"BasicTicker"}},"id":"9496f07f-9fbe-499d-9662-3d0d7f849073","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"8cc3ef83-f98f-413a-a034-87c8508e99f0","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"04f10f61-6bcf-4446-ab3a-614b81f5af0c","type":"DataRange1d"},{"attributes":{},"id":"e1d124a2-dfff-4d15-861c-8cd1a00af338","type":"ToolEvents"},{"attributes":{},"id":"8ee9d12c-5e4e-4d91-aa1e-e77c26a221df","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"acca5cdb-dfac-4211-ac86-878c6637336d","type":"Oval"},{"attributes":{"formatter":{"id":"d7ce826f-9500-4ef0-9b5f-610349368a9e","type":"BasicTickFormatter"},"plot":{"id":"a00bc6e4-234c-4b0d-beb6-df49c7a988df","type":"Plot"},"ticker":{"id":"14e4a181-96eb-417c-be02-b1eaf8c1b667","type":"BasicTicker"}},"id":"9cbbbeb8-b553-4a8c-94ba-26ddfde5d197","type":"LinearAxis"},{"attributes":{"plot":{"id":"a00bc6e4-234c-4b0d-beb6-df49c7a988df","type":"Plot"},"ticker":{"id":"14e4a181-96eb-417c-be02-b1eaf8c1b667","type":"BasicTicker"}},"id":"ad34256d-99b4-49b4-9283-ec64413d9ec8","type":"Grid"},{"attributes":{},"id":"d7ce826f-9500-4ef0-9b5f-610349368a9e","type":"BasicTickFormatter"}],"root_ids":["a00bc6e4-234c-4b0d-beb6-df49c7a988df"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"33f6f216-85b6-435f-bb37-4a6e8e358d63","elementid":"e11a7829-08ff-4d3e-8569-8af52ef99bd6","modelid":"a00bc6e4-234c-4b0d-beb6-df49c7a988df"}];
                
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
