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
      };var element = document.getElementById("08837137-ecad-46c2-baee-9f68e09711be");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '08837137-ecad-46c2-baee-9f68e09711be' but no matching script tag was found. ")
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
                var docs_json = {"3586960a-b897-452d-ac03-b14b1df0ee92":{"roots":{"references":[{"attributes":{"data_source":{"id":"dce1381f-e9fb-4551-b762-fcc0c85c6988","type":"ColumnDataSource"},"glyph":{"id":"730dd4ac-85a5-41f3-87a0-855aa7ead5ba","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7ed9c1bd-539d-441b-9368-854b2777c939","type":"GlyphRenderer"},{"attributes":{"label":{"value":"b"},"renderers":[{"id":"0dc01412-334e-4bf9-ad94-ad59f3e10999","type":"GlyphRenderer"}]},"id":"27dfd2ab-5b1a-4d0a-be7c-d429568e4a3a","type":"LegendItem"},{"attributes":{"plot":{"id":"8cce08ff-1161-4337-a33b-06a6e9eab120","subtype":"Chart","type":"Plot"}},"id":"f45b4e95-87cf-491b-8664-51f223842046","type":"WheelZoomTool"},{"attributes":{"label":{"value":"c"},"renderers":[{"id":"5d37ff0b-ef74-446f-9425-859cf01bd2bc","type":"GlyphRenderer"}]},"id":"786386f6-faef-46a0-8cf8-fb1e8a8913de","type":"LegendItem"},{"attributes":{},"id":"4fade7d7-4ee3-43d0-a067-dd807da530a7","type":"BasicTicker"},{"attributes":{},"id":"e050219e-5818-4147-9180-12009abcc4dc","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"}],"series":["b","b","b","b","b"],"x_values":[0,1,2,3,4],"y_values":[12,33,47,15,126]}},"id":"1152f2f3-0022-41f1-b74b-a57a3d0ca78a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"}],"series":["c","c","c","c","c"],"x_values":[0,1,2,3,4],"y_values":[22,43,10,25,26]}},"id":"12fbe0ee-8425-4e52-8cc6-db4989ba93fe","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"7f5c016e-fa10-43c9-8b1c-711115d65093","type":"LegendItem"},{"id":"27dfd2ab-5b1a-4d0a-be7c-d429568e4a3a","type":"LegendItem"},{"id":"786386f6-faef-46a0-8cf8-fb1e8a8913de","type":"LegendItem"}],"location":"top_left","plot":{"id":"8cce08ff-1161-4337-a33b-06a6e9eab120","subtype":"Chart","type":"Plot"}},"id":"16e7dbe0-5c87-43b4-abf8-4423191942c9","type":"Legend"},{"attributes":{"plot":{"id":"8cce08ff-1161-4337-a33b-06a6e9eab120","subtype":"Chart","type":"Plot"}},"id":"edd69a73-737b-4f33-bf6a-9ff0f127b0a5","type":"HelpTool"},{"attributes":{"line_color":{"value":"#5ab738"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"9f1034ee-03a9-47f1-b579-82828ff06e41","type":"Line"},{"attributes":{"label":{"value":"a"},"renderers":[{"id":"7ed9c1bd-539d-441b-9368-854b2777c939","type":"GlyphRenderer"}]},"id":"7f5c016e-fa10-43c9-8b1c-711115d65093","type":"LegendItem"},{"attributes":{"axis_label":"index","formatter":{"id":"e050219e-5818-4147-9180-12009abcc4dc","type":"BasicTickFormatter"},"plot":{"id":"8cce08ff-1161-4337-a33b-06a6e9eab120","subtype":"Chart","type":"Plot"},"ticker":{"id":"4cf02221-8ef3-4cc9-942f-92a45ac88911","type":"BasicTicker"}},"id":"97cada9f-5f7d-45e6-bbe1-09dadb6a60e1","type":"LinearAxis"},{"attributes":{"callback":null,"end":4.4,"start":-0.4},"id":"f336fd86-fee0-44c0-a9a1-af051cd59e77","type":"Range1d"},{"attributes":{"plot":{"id":"8cce08ff-1161-4337-a33b-06a6e9eab120","subtype":"Chart","type":"Plot"}},"id":"5f6d8c57-2b9d-4c37-bcd4-028d9436b454","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"}],"series":["a","a","a","a","a"],"x_values":[0,1,2,3,4],"y_values":[2,3,7,5,26]}},"id":"dce1381f-e9fb-4551-b762-fcc0c85c6988","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1152f2f3-0022-41f1-b74b-a57a3d0ca78a","type":"ColumnDataSource"},"glyph":{"id":"9f1034ee-03a9-47f1-b579-82828ff06e41","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0dc01412-334e-4bf9-ad94-ad59f3e10999","type":"GlyphRenderer"},{"attributes":{},"id":"09c3c9e9-75fd-430a-a160-f9a40a6a8999","type":"ToolEvents"},{"attributes":{"data_source":{"id":"12fbe0ee-8425-4e52-8cc6-db4989ba93fe","type":"ColumnDataSource"},"glyph":{"id":"e9c1519e-8013-48e4-a3aa-cda09a526a64","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5d37ff0b-ef74-446f-9425-859cf01bd2bc","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":138.4,"start":-10.4},"id":"72b1b6b0-896e-4d97-b651-ba101863c511","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"8cce08ff-1161-4337-a33b-06a6e9eab120","subtype":"Chart","type":"Plot"},"ticker":{"id":"4fade7d7-4ee3-43d0-a067-dd807da530a7","type":"BasicTicker"}},"id":"4f9cd379-fb28-4de7-ae13-850532e3ce38","type":"Grid"},{"attributes":{"plot":{"id":"8cce08ff-1161-4337-a33b-06a6e9eab120","subtype":"Chart","type":"Plot"},"ticker":{"id":"4cf02221-8ef3-4cc9-942f-92a45ac88911","type":"BasicTicker"}},"id":"919a727c-b7a2-4265-859d-f5d179bef737","type":"Grid"},{"attributes":{"plot":{"id":"8cce08ff-1161-4337-a33b-06a6e9eab120","subtype":"Chart","type":"Plot"}},"id":"92cc14ef-da97-41f6-a6d4-544531f70506","type":"PanTool"},{"attributes":{},"id":"4cf02221-8ef3-4cc9-942f-92a45ac88911","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"92cc14ef-da97-41f6-a6d4-544531f70506","type":"PanTool"},{"id":"f45b4e95-87cf-491b-8664-51f223842046","type":"WheelZoomTool"},{"id":"a7fab0d3-03b9-4a41-9a7c-261523c75f91","type":"BoxZoomTool"},{"id":"75c0512d-2586-46be-b00c-6c18c2699190","type":"SaveTool"},{"id":"5f6d8c57-2b9d-4c37-bcd4-028d9436b454","type":"ResetTool"},{"id":"edd69a73-737b-4f33-bf6a-9ff0f127b0a5","type":"HelpTool"}]},"id":"10b9b59c-99d4-4c4d-b302-968b16ecf4b5","type":"Toolbar"},{"attributes":{"plot":{"id":"8cce08ff-1161-4337-a33b-06a6e9eab120","subtype":"Chart","type":"Plot"}},"id":"75c0512d-2586-46be-b00c-6c18c2699190","type":"SaveTool"},{"attributes":{"overlay":{"id":"3527c00c-0499-43b0-8051-f99962894068","type":"BoxAnnotation"},"plot":{"id":"8cce08ff-1161-4337-a33b-06a6e9eab120","subtype":"Chart","type":"Plot"}},"id":"a7fab0d3-03b9-4a41-9a7c-261523c75f91","type":"BoxZoomTool"},{"attributes":{"axis_label":"Languages","formatter":{"id":"a96cc7c8-d4d4-4bf8-841f-b6ba4ea73e8b","type":"BasicTickFormatter"},"plot":{"id":"8cce08ff-1161-4337-a33b-06a6e9eab120","subtype":"Chart","type":"Plot"},"ticker":{"id":"4fade7d7-4ee3-43d0-a067-dd807da530a7","type":"BasicTicker"}},"id":"c49f2633-4a24-4b3c-b44c-345e6f427275","type":"LinearAxis"},{"attributes":{},"id":"a96cc7c8-d4d4-4bf8-841f-b6ba4ea73e8b","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"97cada9f-5f7d-45e6-bbe1-09dadb6a60e1","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"c49f2633-4a24-4b3c-b44c-345e6f427275","type":"LinearAxis"}],"renderers":[{"id":"3527c00c-0499-43b0-8051-f99962894068","type":"BoxAnnotation"},{"id":"7ed9c1bd-539d-441b-9368-854b2777c939","type":"GlyphRenderer"},{"id":"0dc01412-334e-4bf9-ad94-ad59f3e10999","type":"GlyphRenderer"},{"id":"5d37ff0b-ef74-446f-9425-859cf01bd2bc","type":"GlyphRenderer"},{"id":"16e7dbe0-5c87-43b4-abf8-4423191942c9","type":"Legend"},{"id":"97cada9f-5f7d-45e6-bbe1-09dadb6a60e1","type":"LinearAxis"},{"id":"c49f2633-4a24-4b3c-b44c-345e6f427275","type":"LinearAxis"},{"id":"919a727c-b7a2-4265-859d-f5d179bef737","type":"Grid"},{"id":"4f9cd379-fb28-4de7-ae13-850532e3ce38","type":"Grid"}],"title":{"id":"c3347719-6422-4d16-a991-e8a1ed857c06","type":"Title"},"tool_events":{"id":"09c3c9e9-75fd-430a-a160-f9a40a6a8999","type":"ToolEvents"},"toolbar":{"id":"10b9b59c-99d4-4c4d-b302-968b16ecf4b5","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"f336fd86-fee0-44c0-a9a1-af051cd59e77","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"72b1b6b0-896e-4d97-b651-ba101863c511","type":"Range1d"}},"id":"8cce08ff-1161-4337-a33b-06a6e9eab120","subtype":"Chart","type":"Plot"},{"attributes":{"plot":null,"text":"line"},"id":"c3347719-6422-4d16-a991-e8a1ed857c06","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3527c00c-0499-43b0-8051-f99962894068","type":"BoxAnnotation"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"730dd4ac-85a5-41f3-87a0-855aa7ead5ba","type":"Line"},{"attributes":{"line_color":{"value":"#407ee7"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"e9c1519e-8013-48e4-a3aa-cda09a526a64","type":"Line"}],"root_ids":["8cce08ff-1161-4337-a33b-06a6e9eab120"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"3586960a-b897-452d-ac03-b14b1df0ee92","elementid":"08837137-ecad-46c2-baee-9f68e09711be","modelid":"8cce08ff-1161-4337-a33b-06a6e9eab120"}];
                
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
