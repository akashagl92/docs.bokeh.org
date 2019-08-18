document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("90ab89b4-90af-42d0-8a49-4b10399d60f8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '90ab89b4-90af-42d0-8a49-4b10399d60f8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"a3f38f1d-ddd6-4160-92ee-a5e520f4854d":{"roots":{"references":[{"attributes":{"plot":{"id":"ce74696e-101d-4250-b7c3-1bcaa924cd85","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d867e78-e00b-4656-8f67-99684ef35752","type":"BasicTicker"}},"id":"d8e7094c-d8e9-4a3c-a9fa-3653d8588f07","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c97b730d-7344-4c79-b325-b8e1b0c4ef1c","type":"BoxAnnotation"},{"attributes":{},"id":"2d0e6e9e-07f2-4273-96a7-9a612c636d19","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"af48c773-e59d-482a-ae25-9c949c976bb4","type":"PanTool"},{"id":"150c474b-669e-424f-b2cb-9eea9859f30a","type":"WheelZoomTool"},{"id":"48c4a20a-ee5f-42f7-bfe2-b15508cac18d","type":"BoxZoomTool"},{"id":"69beceef-9468-45cc-964a-647598530009","type":"SaveTool"},{"id":"1a7e5082-2542-4c28-ae5f-35e1d7c59ae3","type":"ResetTool"},{"id":"9ae5d59d-d273-41ee-b616-aff743834a12","type":"HelpTool"}]},"id":"5c904fb9-0a7c-423e-9a3d-fa1b9abb701d","type":"Toolbar"},{"attributes":{"plot":{"id":"ce74696e-101d-4250-b7c3-1bcaa924cd85","subtype":"Figure","type":"Plot"}},"id":"150c474b-669e-424f-b2cb-9eea9859f30a","type":"WheelZoomTool"},{"attributes":{},"id":"83a7af26-1f1b-4be7-ad5c-0c8c39fd995a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"c200c8ce-9f02-408c-a241-18b92d4e3f41","type":"ColumnDataSource"},"glyph":{"id":"f727c0d4-d0f4-48fb-9b15-e5bb201c2145","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":{"id":"f4b41b6f-a7f8-4504-9788-5573d987e581","type":"MultiLine"},"selection_glyph":null},"id":"44d2a71c-9e96-4936-ae5f-424b4e4ddbcc","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"ce74696e-101d-4250-b7c3-1bcaa924cd85","subtype":"Figure","type":"Plot"},"ticker":{"id":"2d0e6e9e-07f2-4273-96a7-9a612c636d19","type":"BasicTicker"}},"id":"78d9a968-9b6f-4aa0-a1f2-aeda97a03406","type":"Grid"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"f727c0d4-d0f4-48fb-9b15-e5bb201c2145","type":"MultiLine"},{"attributes":{},"id":"a54b6d09-b4b9-4238-97c2-795ed9b65515","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"7ee5a8e8-9e4c-4511-bdd5-5731d54ec3d9","type":"Title"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color"],"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]}},"id":"c200c8ce-9f02-408c-a241-18b92d4e3f41","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ce74696e-101d-4250-b7c3-1bcaa924cd85","subtype":"Figure","type":"Plot"}},"id":"9ae5d59d-d273-41ee-b616-aff743834a12","type":"HelpTool"},{"attributes":{},"id":"0d867e78-e00b-4656-8f67-99684ef35752","type":"BasicTicker"},{"attributes":{"callback":null},"id":"db5e70b6-e8ab-4b29-8ba0-515d5a9e176c","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"f4b41b6f-a7f8-4504-9788-5573d987e581","type":"MultiLine"},{"attributes":{},"id":"2affff54-26f0-4dbd-bdab-0b5ce8d1a12e","type":"ToolEvents"},{"attributes":{"plot":{"id":"ce74696e-101d-4250-b7c3-1bcaa924cd85","subtype":"Figure","type":"Plot"}},"id":"69beceef-9468-45cc-964a-647598530009","type":"SaveTool"},{"attributes":{"below":[{"id":"15421e95-0e8d-4b79-93cf-733f45631a13","type":"LinearAxis"}],"left":[{"id":"d1e22be3-ea91-4907-b992-971004dc8b91","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15421e95-0e8d-4b79-93cf-733f45631a13","type":"LinearAxis"},{"id":"d8e7094c-d8e9-4a3c-a9fa-3653d8588f07","type":"Grid"},{"id":"d1e22be3-ea91-4907-b992-971004dc8b91","type":"LinearAxis"},{"id":"78d9a968-9b6f-4aa0-a1f2-aeda97a03406","type":"Grid"},{"id":"c97b730d-7344-4c79-b325-b8e1b0c4ef1c","type":"BoxAnnotation"},{"id":"44d2a71c-9e96-4936-ae5f-424b4e4ddbcc","type":"GlyphRenderer"}],"title":{"id":"7ee5a8e8-9e4c-4511-bdd5-5731d54ec3d9","type":"Title"},"tool_events":{"id":"2affff54-26f0-4dbd-bdab-0b5ce8d1a12e","type":"ToolEvents"},"toolbar":{"id":"5c904fb9-0a7c-423e-9a3d-fa1b9abb701d","type":"Toolbar"},"x_range":{"id":"db5e70b6-e8ab-4b29-8ba0-515d5a9e176c","type":"DataRange1d"},"y_range":{"id":"7f744c1a-3abd-407e-b83d-bc600d63dc48","type":"DataRange1d"}},"id":"ce74696e-101d-4250-b7c3-1bcaa924cd85","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"c97b730d-7344-4c79-b325-b8e1b0c4ef1c","type":"BoxAnnotation"},"plot":{"id":"ce74696e-101d-4250-b7c3-1bcaa924cd85","subtype":"Figure","type":"Plot"}},"id":"48c4a20a-ee5f-42f7-bfe2-b15508cac18d","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"a54b6d09-b4b9-4238-97c2-795ed9b65515","type":"BasicTickFormatter"},"plot":{"id":"ce74696e-101d-4250-b7c3-1bcaa924cd85","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d867e78-e00b-4656-8f67-99684ef35752","type":"BasicTicker"}},"id":"15421e95-0e8d-4b79-93cf-733f45631a13","type":"LinearAxis"},{"attributes":{"formatter":{"id":"83a7af26-1f1b-4be7-ad5c-0c8c39fd995a","type":"BasicTickFormatter"},"plot":{"id":"ce74696e-101d-4250-b7c3-1bcaa924cd85","subtype":"Figure","type":"Plot"},"ticker":{"id":"2d0e6e9e-07f2-4273-96a7-9a612c636d19","type":"BasicTicker"}},"id":"d1e22be3-ea91-4907-b992-971004dc8b91","type":"LinearAxis"},{"attributes":{"plot":{"id":"ce74696e-101d-4250-b7c3-1bcaa924cd85","subtype":"Figure","type":"Plot"}},"id":"af48c773-e59d-482a-ae25-9c949c976bb4","type":"PanTool"},{"attributes":{"callback":null},"id":"7f744c1a-3abd-407e-b83d-bc600d63dc48","type":"DataRange1d"},{"attributes":{"plot":{"id":"ce74696e-101d-4250-b7c3-1bcaa924cd85","subtype":"Figure","type":"Plot"}},"id":"1a7e5082-2542-4c28-ae5f-35e1d7c59ae3","type":"ResetTool"}],"root_ids":["ce74696e-101d-4250-b7c3-1bcaa924cd85"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"a3f38f1d-ddd6-4160-92ee-a5e520f4854d","elementid":"90ab89b4-90af-42d0-8a49-4b10399d60f8","modelid":"ce74696e-101d-4250-b7c3-1bcaa924cd85"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});