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
      };var element = document.getElementById("6d2b0ceb-351c-4387-afb4-91bc669d359a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6d2b0ceb-351c-4387-afb4-91bc669d359a' but no matching script tag was found. ")
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
                var docs_json = {"e7b9ac7c-4356-45cf-bdc1-12bbce715e51":{"roots":{"references":[{"attributes":{"plot":{"id":"a28cd81f-c700-4481-b7c0-279495318f17","subtype":"Figure","type":"Plot"}},"id":"917e1235-3dc3-4d62-98c5-0553be03de8d","type":"SaveTool"},{"attributes":{"callback":null},"id":"ab88eb66-a637-473e-87a5-831ac3cb1ffb","type":"DataRange1d"},{"attributes":{"plot":{"id":"a28cd81f-c700-4481-b7c0-279495318f17","subtype":"Figure","type":"Plot"}},"id":"54678741-e4e1-4037-b6f4-e8045723d006","type":"PanTool"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"75e2965b-5bc9-41c2-9174-b7b8f62abd4a","type":"MultiLine"},{"attributes":{},"id":"7be6503d-ea27-45e5-b0f6-ab480d6a95e1","type":"BasicTicker"},{"attributes":{},"id":"647597bf-681f-4308-956c-5d69e1ef22ec","type":"ToolEvents"},{"attributes":{"callback":null},"id":"a09fd979-3ec9-40d8-8fa3-decbb8d2ed91","type":"DataRange1d"},{"attributes":{},"id":"fa101d89-eb05-4113-b164-635222da0e1a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8c8bad14-6a73-4fad-a981-6dd027b0de6b","type":"BasicTickFormatter"},"plot":{"id":"a28cd81f-c700-4481-b7c0-279495318f17","subtype":"Figure","type":"Plot"},"ticker":{"id":"02bfa44a-ab06-445a-96ba-45ce6e7e7c6b","type":"BasicTicker"}},"id":"bd749bbb-e91e-4fc3-9a4a-a87513420e9e","type":"LinearAxis"},{"attributes":{"plot":{"id":"a28cd81f-c700-4481-b7c0-279495318f17","subtype":"Figure","type":"Plot"}},"id":"024f6b98-bdb8-4074-878c-a8da3ea4400f","type":"ResetTool"},{"attributes":{},"id":"d5d90db9-7b85-45fe-8971-3a83ad84e739","type":"LinearScale"},{"attributes":{"overlay":{"id":"0c7fc99b-34e6-43d7-b3fc-71586020f3d3","type":"BoxAnnotation"},"plot":{"id":"a28cd81f-c700-4481-b7c0-279495318f17","subtype":"Figure","type":"Plot"}},"id":"5630d2aa-8537-4c54-afd6-d06e080fd082","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0c7fc99b-34e6-43d7-b3fc-71586020f3d3","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"c5153a85-adc1-4e33-aa7a-13a119499402","type":"Title"},{"attributes":{"plot":{"id":"a28cd81f-c700-4481-b7c0-279495318f17","subtype":"Figure","type":"Plot"},"ticker":{"id":"02bfa44a-ab06-445a-96ba-45ce6e7e7c6b","type":"BasicTicker"}},"id":"45a5ba52-5a19-4f54-b03e-36249ca11fca","type":"Grid"},{"attributes":{},"id":"a71edcaa-8873-404d-aa19-dd30ad9a0f67","type":"LinearScale"},{"attributes":{"plot":{"id":"a28cd81f-c700-4481-b7c0-279495318f17","subtype":"Figure","type":"Plot"}},"id":"bf2d7d12-e389-4503-b44b-d0c7b261132a","type":"HelpTool"},{"attributes":{},"id":"8c8bad14-6a73-4fad-a981-6dd027b0de6b","type":"BasicTickFormatter"},{"attributes":{},"id":"02bfa44a-ab06-445a-96ba-45ce6e7e7c6b","type":"BasicTicker"},{"attributes":{"plot":{"id":"a28cd81f-c700-4481-b7c0-279495318f17","subtype":"Figure","type":"Plot"}},"id":"578c4b04-14d4-4aae-b4df-e526f2405e7b","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["ys","xs","line_color"],"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]}},"id":"3efc7068-7304-4bea-b25d-dd803091e9a1","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"fa101d89-eb05-4113-b164-635222da0e1a","type":"BasicTickFormatter"},"plot":{"id":"a28cd81f-c700-4481-b7c0-279495318f17","subtype":"Figure","type":"Plot"},"ticker":{"id":"7be6503d-ea27-45e5-b0f6-ab480d6a95e1","type":"BasicTicker"}},"id":"9690f5cd-cc53-405b-8faa-2f936caf3ae9","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"375b6eaa-b652-4763-9924-2634832ebe17","type":"MultiLine"},{"attributes":{"below":[{"id":"bd749bbb-e91e-4fc3-9a4a-a87513420e9e","type":"LinearAxis"}],"left":[{"id":"9690f5cd-cc53-405b-8faa-2f936caf3ae9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"bd749bbb-e91e-4fc3-9a4a-a87513420e9e","type":"LinearAxis"},{"id":"45a5ba52-5a19-4f54-b03e-36249ca11fca","type":"Grid"},{"id":"9690f5cd-cc53-405b-8faa-2f936caf3ae9","type":"LinearAxis"},{"id":"e16e190d-71d7-458d-a284-e42c5084676b","type":"Grid"},{"id":"0c7fc99b-34e6-43d7-b3fc-71586020f3d3","type":"BoxAnnotation"},{"id":"e4c4ed95-4bc7-4193-adf9-2bc03a8bb225","type":"GlyphRenderer"}],"title":{"id":"c5153a85-adc1-4e33-aa7a-13a119499402","type":"Title"},"tool_events":{"id":"647597bf-681f-4308-956c-5d69e1ef22ec","type":"ToolEvents"},"toolbar":{"id":"8fb6f4c4-eeb2-4a25-9968-de2d10b1dee3","type":"Toolbar"},"x_range":{"id":"ab88eb66-a637-473e-87a5-831ac3cb1ffb","type":"DataRange1d"},"x_scale":{"id":"a71edcaa-8873-404d-aa19-dd30ad9a0f67","type":"LinearScale"},"y_range":{"id":"a09fd979-3ec9-40d8-8fa3-decbb8d2ed91","type":"DataRange1d"},"y_scale":{"id":"d5d90db9-7b85-45fe-8971-3a83ad84e739","type":"LinearScale"}},"id":"a28cd81f-c700-4481-b7c0-279495318f17","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"54678741-e4e1-4037-b6f4-e8045723d006","type":"PanTool"},{"id":"578c4b04-14d4-4aae-b4df-e526f2405e7b","type":"WheelZoomTool"},{"id":"5630d2aa-8537-4c54-afd6-d06e080fd082","type":"BoxZoomTool"},{"id":"917e1235-3dc3-4d62-98c5-0553be03de8d","type":"SaveTool"},{"id":"024f6b98-bdb8-4074-878c-a8da3ea4400f","type":"ResetTool"},{"id":"bf2d7d12-e389-4503-b44b-d0c7b261132a","type":"HelpTool"}]},"id":"8fb6f4c4-eeb2-4a25-9968-de2d10b1dee3","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"a28cd81f-c700-4481-b7c0-279495318f17","subtype":"Figure","type":"Plot"},"ticker":{"id":"7be6503d-ea27-45e5-b0f6-ab480d6a95e1","type":"BasicTicker"}},"id":"e16e190d-71d7-458d-a284-e42c5084676b","type":"Grid"},{"attributes":{"data_source":{"id":"3efc7068-7304-4bea-b25d-dd803091e9a1","type":"ColumnDataSource"},"glyph":{"id":"75e2965b-5bc9-41c2-9174-b7b8f62abd4a","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"375b6eaa-b652-4763-9924-2634832ebe17","type":"MultiLine"},"selection_glyph":null},"id":"e4c4ed95-4bc7-4193-adf9-2bc03a8bb225","type":"GlyphRenderer"}],"root_ids":["a28cd81f-c700-4481-b7c0-279495318f17"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"e7b9ac7c-4356-45cf-bdc1-12bbce715e51","elementid":"6d2b0ceb-351c-4387-afb4-91bc669d359a","modelid":"a28cd81f-c700-4481-b7c0-279495318f17"}];
                
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
