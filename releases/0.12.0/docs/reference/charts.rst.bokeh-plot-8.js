document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("e00ec0e8-b8ba-47c3-b130-e6139a39c038");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e00ec0e8-b8ba-47c3-b130-e6139a39c038' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"2b1fd10c-c011-4d44-80e8-81ae2a6135f9":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"}],"series":["b","b","b","b","b"],"x_values":[0,1,2,3,4],"y_values":[12,33,47,15,126]}},"id":"bfc117d9-d261-4f9b-98c3-5ad03ad38f55","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e982a8b1-8913-41a1-a0c4-8804f2bb2a58","type":"ColumnDataSource"},"glyph":{"id":"54d0e94e-3894-480c-9d65-e637880e3415","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"188fdcc9-17e6-4c64-8956-663f9738b489","type":"GlyphRenderer"},{"attributes":{},"id":"6aca6dbe-a9b2-4ac6-a114-95b46ac7b49f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a37bff39-9992-4b69-a311-150bb530fd51","subtype":"Chart","type":"Plot"}},"id":"90bf7ccf-36bd-4a49-8cd5-4b0fd839ce3f","type":"HelpTool"},{"attributes":{"line_color":{"value":"#407ee7"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"7bec88df-01bf-4cde-a9bb-7ba87a6e1418","type":"Line"},{"attributes":{"plot":{"id":"a37bff39-9992-4b69-a311-150bb530fd51","subtype":"Chart","type":"Plot"}},"id":"c49bea0e-bbb9-4963-9bfc-51fd6760c4b0","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"8f442646-ae3e-4c4b-9759-dbb9ac8b073a","type":"BoxAnnotation"},"plot":{"id":"a37bff39-9992-4b69-a311-150bb530fd51","subtype":"Chart","type":"Plot"}},"id":"a1b22266-7d1f-4e67-b86b-b5fceec4a88e","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"line"},"id":"a180d689-b5b8-4e4b-955b-754d51b73d31","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"a37bff39-9992-4b69-a311-150bb530fd51","subtype":"Chart","type":"Plot"},"ticker":{"id":"361070d2-cfa6-4dbd-99c2-cc3b2fe94967","type":"BasicTicker"}},"id":"877a0219-73b3-4dd5-b3a9-62c53f367633","type":"Grid"},{"attributes":{"data_source":{"id":"d164a3cf-b146-451c-b93d-7d79b39a3c29","type":"ColumnDataSource"},"glyph":{"id":"7bec88df-01bf-4cde-a9bb-7ba87a6e1418","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"457829dc-dfca-4e22-b40d-f5d939e46c33","type":"GlyphRenderer"},{"attributes":{},"id":"51335eb1-343f-44af-9902-a9e0480ed13b","type":"ToolEvents"},{"attributes":{},"id":"70800490-249c-4f8e-9be5-ab9c587f9f8f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a37bff39-9992-4b69-a311-150bb530fd51","subtype":"Chart","type":"Plot"}},"id":"e80f87dc-b215-406d-a1a3-a0edf371c665","type":"ResetTool"},{"attributes":{},"id":"0857f0a1-abc7-47e0-b506-2cca22c44b59","type":"BasicTicker"},{"attributes":{"plot":{"id":"a37bff39-9992-4b69-a311-150bb530fd51","subtype":"Chart","type":"Plot"},"ticker":{"id":"0857f0a1-abc7-47e0-b506-2cca22c44b59","type":"BasicTicker"}},"id":"691bd2d0-4ca1-486d-ad34-0fa7d3f64149","type":"Grid"},{"attributes":{"line_color":{"value":"#5ab738"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"81347aa8-c721-4f15-8653-cc48371c09c5","type":"Line"},{"attributes":{"legends":[["a",[{"id":"188fdcc9-17e6-4c64-8956-663f9738b489","type":"GlyphRenderer"}]],["b",[{"id":"c74fc880-7170-4dae-be72-77eb3ef21ab2","type":"GlyphRenderer"}]],["c",[{"id":"457829dc-dfca-4e22-b40d-f5d939e46c33","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"a37bff39-9992-4b69-a311-150bb530fd51","subtype":"Chart","type":"Plot"}},"id":"4ae7511d-dc27-410f-9ffb-c21dfb8e7a4f","type":"Legend"},{"attributes":{"axis_label":"index","formatter":{"id":"70800490-249c-4f8e-9be5-ab9c587f9f8f","type":"BasicTickFormatter"},"plot":{"id":"a37bff39-9992-4b69-a311-150bb530fd51","subtype":"Chart","type":"Plot"},"ticker":{"id":"0857f0a1-abc7-47e0-b506-2cca22c44b59","type":"BasicTicker"}},"id":"e59adfae-bf85-47fe-abd7-47cf3e935592","type":"LinearAxis"},{"attributes":{"below":[{"id":"e59adfae-bf85-47fe-abd7-47cf3e935592","type":"LinearAxis"}],"height":400,"left":[{"id":"8f5f7858-f3d6-4f35-92be-a7efb6e1633e","type":"LinearAxis"}],"renderers":[{"id":"8f442646-ae3e-4c4b-9759-dbb9ac8b073a","type":"BoxAnnotation"},{"id":"188fdcc9-17e6-4c64-8956-663f9738b489","type":"GlyphRenderer"},{"id":"c74fc880-7170-4dae-be72-77eb3ef21ab2","type":"GlyphRenderer"},{"id":"457829dc-dfca-4e22-b40d-f5d939e46c33","type":"GlyphRenderer"},{"id":"4ae7511d-dc27-410f-9ffb-c21dfb8e7a4f","type":"Legend"},{"id":"e59adfae-bf85-47fe-abd7-47cf3e935592","type":"LinearAxis"},{"id":"8f5f7858-f3d6-4f35-92be-a7efb6e1633e","type":"LinearAxis"},{"id":"691bd2d0-4ca1-486d-ad34-0fa7d3f64149","type":"Grid"},{"id":"877a0219-73b3-4dd5-b3a9-62c53f367633","type":"Grid"}],"title":{"id":"a180d689-b5b8-4e4b-955b-754d51b73d31","type":"Title"},"tool_events":{"id":"51335eb1-343f-44af-9902-a9e0480ed13b","type":"ToolEvents"},"toolbar":{"id":"3846f882-b535-4cc8-9b77-c21c87669413","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"b99b9953-e9ff-49e0-be5e-f6f52e4a9c5d","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a8a11781-ac0c-4cd5-bef5-d35f9e0e4e31","type":"Range1d"}},"id":"a37bff39-9992-4b69-a311-150bb530fd51","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"}],"series":["a","a","a","a","a"],"x_values":[0,1,2,3,4],"y_values":[2,3,7,5,26]}},"id":"e982a8b1-8913-41a1-a0c4-8804f2bb2a58","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"54d0e94e-3894-480c-9d65-e637880e3415","type":"Line"},{"attributes":{"axis_label":"Languages","formatter":{"id":"6aca6dbe-a9b2-4ac6-a114-95b46ac7b49f","type":"BasicTickFormatter"},"plot":{"id":"a37bff39-9992-4b69-a311-150bb530fd51","subtype":"Chart","type":"Plot"},"ticker":{"id":"361070d2-cfa6-4dbd-99c2-cc3b2fe94967","type":"BasicTicker"}},"id":"8f5f7858-f3d6-4f35-92be-a7efb6e1633e","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"45b6528d-d9b4-470b-9284-439e8cd5435c","type":"PanTool"},{"id":"c49bea0e-bbb9-4963-9bfc-51fd6760c4b0","type":"WheelZoomTool"},{"id":"a1b22266-7d1f-4e67-b86b-b5fceec4a88e","type":"BoxZoomTool"},{"id":"09a65067-6bd6-47bf-8ef2-6b1c2a1ad405","type":"SaveTool"},{"id":"e80f87dc-b215-406d-a1a3-a0edf371c665","type":"ResetTool"},{"id":"90bf7ccf-36bd-4a49-8cd5-4b0fd839ce3f","type":"HelpTool"}]},"id":"3846f882-b535-4cc8-9b77-c21c87669413","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"}],"series":["c","c","c","c","c"],"x_values":[0,1,2,3,4],"y_values":[22,43,10,25,26]}},"id":"d164a3cf-b146-451c-b93d-7d79b39a3c29","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8f442646-ae3e-4c4b-9759-dbb9ac8b073a","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":138.4,"start":-10.4},"id":"a8a11781-ac0c-4cd5-bef5-d35f9e0e4e31","type":"Range1d"},{"attributes":{"data_source":{"id":"bfc117d9-d261-4f9b-98c3-5ad03ad38f55","type":"ColumnDataSource"},"glyph":{"id":"81347aa8-c721-4f15-8653-cc48371c09c5","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c74fc880-7170-4dae-be72-77eb3ef21ab2","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a37bff39-9992-4b69-a311-150bb530fd51","subtype":"Chart","type":"Plot"}},"id":"45b6528d-d9b4-470b-9284-439e8cd5435c","type":"PanTool"},{"attributes":{"plot":{"id":"a37bff39-9992-4b69-a311-150bb530fd51","subtype":"Chart","type":"Plot"}},"id":"09a65067-6bd6-47bf-8ef2-6b1c2a1ad405","type":"SaveTool"},{"attributes":{"callback":null,"end":4.4,"start":-0.4},"id":"b99b9953-e9ff-49e0-be5e-f6f52e4a9c5d","type":"Range1d"},{"attributes":{},"id":"361070d2-cfa6-4dbd-99c2-cc3b2fe94967","type":"BasicTicker"}],"root_ids":["a37bff39-9992-4b69-a311-150bb530fd51"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"2b1fd10c-c011-4d44-80e8-81ae2a6135f9","elementid":"e00ec0e8-b8ba-47c3-b130-e6139a39c038","modelid":"a37bff39-9992-4b69-a311-150bb530fd51"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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