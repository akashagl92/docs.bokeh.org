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
      };var element = document.getElementById("845d66fc-c0d5-4295-af59-f07e6f565747");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '845d66fc-c0d5-4295-af59-f07e6f565747' but no matching script tag was found. ")
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
                var docs_json = {"ad79bf49-ff20-4e5a-a554-ff4ce5fa9d3b":{"roots":{"references":[{"attributes":{},"id":"c2be4207-84f4-4cc2-976b-0e6e6fbb1d40","type":"ToolEvents"},{"attributes":{"formatter":{"id":"d767cb35-a0f3-4f93-a641-d913dbb90073","type":"BasicTickFormatter"},"plot":{"id":"83f9af96-4ea4-4f9d-bf0e-c151223ed575","subtype":"Figure","type":"Plot"},"ticker":{"id":"6743428c-d363-4647-98f9-4997e462eb69","type":"BasicTicker"}},"id":"a96224f3-8593-4e48-960f-941aa79ced28","type":"LinearAxis"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"a78bccde-b640-4fd5-87ea-5674781a088d","type":"BoxSelectTool"},{"id":"2b5fbf17-f543-494f-a273-ac8adc6ad430","type":"LassoSelectTool"},{"id":"41a27fa8-690c-4b2b-b41a-30eb5eb13477","type":"HelpTool"},{"id":"24cf674c-3b0a-498e-a5a5-f12f84549d89","type":"BoxSelectTool"},{"id":"09942082-5112-455a-91af-9033a0e48fbf","type":"LassoSelectTool"},{"id":"e2ead073-2320-451c-bc6a-6972cdd10eb6","type":"HelpTool"}]},"id":"8ce54b6d-9a23-4afb-b813-d492975787df","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"14b0cb97-4104-4518-89f6-3911a8fb571d","type":"BasicTickFormatter"},"plot":{"id":"f150cdba-ddaa-4157-a4bb-17f5cd6f1e4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a91e891-9784-4b31-8ccb-5a38d76c9f2e","type":"BasicTicker"}},"id":"9e7aba49-95f2-411a-8110-997bc9081b15","type":"LinearAxis"},{"attributes":{"callback":null},"id":"48fc220e-3d44-4c5e-a8a7-4ceb6bec0994","type":"DataRange1d"},{"attributes":{},"id":"f76968f4-84c2-4f70-80f6-e06f835bcd8c","type":"BasicTicker"},{"attributes":{"below":[{"id":"78158ff4-7233-46cc-b21a-69a7d81d037f","type":"LinearAxis"}],"left":[{"id":"9e7aba49-95f2-411a-8110-997bc9081b15","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"78158ff4-7233-46cc-b21a-69a7d81d037f","type":"LinearAxis"},{"id":"2dff781a-2af4-421e-bc01-4653209e17bf","type":"Grid"},{"id":"9e7aba49-95f2-411a-8110-997bc9081b15","type":"LinearAxis"},{"id":"dc007522-a74e-413e-822b-d3754443309e","type":"Grid"},{"id":"1b8ed7a7-d623-43b0-9e0e-35d8afb9c4dd","type":"BoxAnnotation"},{"id":"f5016991-e1ad-47da-a70b-9e727b6d64b1","type":"PolyAnnotation"},{"id":"02e95fc5-bdb4-4990-a32b-274fa1d38c17","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"c2be4207-84f4-4cc2-976b-0e6e6fbb1d40","type":"ToolEvents"},"toolbar":{"id":"cf3049f5-547e-42ad-bd2d-6ce04aed4993","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"48fc220e-3d44-4c5e-a8a7-4ceb6bec0994","type":"DataRange1d"},"y_range":{"id":"075aaebb-30ce-4725-bcf0-082c5eefce26","type":"DataRange1d"}},"id":"f150cdba-ddaa-4157-a4bb-17f5cd6f1e4a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2dc01930-7b67-4603-802e-ab10cb1fc9a4","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"075aaebb-30ce-4725-bcf0-082c5eefce26","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"459c39c5-2c75-444e-a0ab-31e962025258","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a78bccde-b640-4fd5-87ea-5674781a088d","type":"BoxSelectTool"},{"id":"2b5fbf17-f543-494f-a273-ac8adc6ad430","type":"LassoSelectTool"},{"id":"41a27fa8-690c-4b2b-b41a-30eb5eb13477","type":"HelpTool"}]},"id":"e202bcf0-be8c-4992-b39f-8f166dfe9081","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"f5016991-e1ad-47da-a70b-9e727b6d64b1","type":"PolyAnnotation"},"plot":{"id":"f150cdba-ddaa-4157-a4bb-17f5cd6f1e4a","subtype":"Figure","type":"Plot"}},"id":"09942082-5112-455a-91af-9033a0e48fbf","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"83f9af96-4ea4-4f9d-bf0e-c151223ed575","subtype":"Figure","type":"Plot"},{"id":"f150cdba-ddaa-4157-a4bb-17f5cd6f1e4a","subtype":"Figure","type":"Plot"}]},"id":"8be65631-e118-457f-853a-a21879f27e65","type":"Row"},{"attributes":{"children":[{"id":"8ce54b6d-9a23-4afb-b813-d492975787df","type":"ToolbarBox"},{"id":"85a4c8a3-aa5b-4be8-bf07-9b766cf9fd7a","type":"Column"}]},"id":"ca3e0705-5712-4ffc-bd2a-6f3db35fc30e","type":"Column"},{"attributes":{"callback":null},"id":"f9b488a3-ecd4-4b7f-8774-2b1a53f263d1","type":"DataRange1d"},{"attributes":{"plot":{"id":"83f9af96-4ea4-4f9d-bf0e-c151223ed575","subtype":"Figure","type":"Plot"}},"id":"41a27fa8-690c-4b2b-b41a-30eb5eb13477","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"f0668a93-9d2a-47a2-9619-016639446fe2","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"34426900-8ab5-4987-929b-f8719573985d","type":"PolyAnnotation"},{"attributes":{},"id":"d767cb35-a0f3-4f93-a641-d913dbb90073","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1e792377-2e1b-4cb6-9c6e-3458215f5682","type":"ColumnDataSource"},"glyph":{"id":"151a7df9-77ea-47f0-8098-d101ef695b5d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"bb09ae7e-30d3-4b29-95f1-169f70ef1027","type":"Circle"},"selection_glyph":null},"id":"30c35e66-dc45-494b-b798-00539fd7bf12","type":"GlyphRenderer"},{"attributes":{},"id":"a3cfdfce-b1b1-4e8f-a371-8fe08362cf98","type":"ToolEvents"},{"attributes":{},"id":"14b0cb97-4104-4518-89f6-3911a8fb571d","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"1b8ed7a7-d623-43b0-9e0e-35d8afb9c4dd","type":"BoxAnnotation"},"plot":{"id":"f150cdba-ddaa-4157-a4bb-17f5cd6f1e4a","subtype":"Figure","type":"Plot"},"renderers":[{"id":"02e95fc5-bdb4-4990-a32b-274fa1d38c17","type":"GlyphRenderer"}]},"id":"24cf674c-3b0a-498e-a5a5-f12f84549d89","type":"BoxSelectTool"},{"attributes":{"dimension":1,"plot":{"id":"f150cdba-ddaa-4157-a4bb-17f5cd6f1e4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a91e891-9784-4b31-8ccb-5a38d76c9f2e","type":"BasicTicker"}},"id":"dc007522-a74e-413e-822b-d3754443309e","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1b8ed7a7-d623-43b0-9e0e-35d8afb9c4dd","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y1","y0"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"1e792377-2e1b-4cb6-9c6e-3458215f5682","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"151a7df9-77ea-47f0-8098-d101ef695b5d","type":"Circle"},{"attributes":{"children":[{"id":"8be65631-e118-457f-853a-a21879f27e65","type":"Row"}]},"id":"85a4c8a3-aa5b-4be8-bf07-9b766cf9fd7a","type":"Column"},{"attributes":{"dimension":1,"plot":{"id":"83f9af96-4ea4-4f9d-bf0e-c151223ed575","subtype":"Figure","type":"Plot"},"ticker":{"id":"8733d682-970c-42a6-a360-6a0e56de062c","type":"BasicTicker"}},"id":"1cf8ac72-0a33-4b8c-ade7-a48c8493871d","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"34426900-8ab5-4987-929b-f8719573985d","type":"PolyAnnotation"},"plot":{"id":"83f9af96-4ea4-4f9d-bf0e-c151223ed575","subtype":"Figure","type":"Plot"}},"id":"2b5fbf17-f543-494f-a273-ac8adc6ad430","type":"LassoSelectTool"},{"attributes":{},"id":"cbfc2932-015c-4a88-a7b6-146f5c5d85d7","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"83f9af96-4ea4-4f9d-bf0e-c151223ed575","subtype":"Figure","type":"Plot"},"ticker":{"id":"6743428c-d363-4647-98f9-4997e462eb69","type":"BasicTicker"}},"id":"a698ddf9-f927-458f-bf62-5ab9f8189e98","type":"Grid"},{"attributes":{},"id":"6743428c-d363-4647-98f9-4997e462eb69","type":"BasicTicker"},{"attributes":{"plot":{"id":"f150cdba-ddaa-4157-a4bb-17f5cd6f1e4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f76968f4-84c2-4f70-80f6-e06f835bcd8c","type":"BasicTicker"}},"id":"2dff781a-2af4-421e-bc01-4653209e17bf","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"f5016991-e1ad-47da-a70b-9e727b6d64b1","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bf7f7e34-4108-4edf-9ab7-3909a619b67e","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1e792377-2e1b-4cb6-9c6e-3458215f5682","type":"ColumnDataSource"},"glyph":{"id":"459c39c5-2c75-444e-a0ab-31e962025258","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"f0668a93-9d2a-47a2-9619-016639446fe2","type":"Circle"},"selection_glyph":null},"id":"02e95fc5-bdb4-4990-a32b-274fa1d38c17","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f150cdba-ddaa-4157-a4bb-17f5cd6f1e4a","subtype":"Figure","type":"Plot"}},"id":"e2ead073-2320-451c-bc6a-6972cdd10eb6","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"bb09ae7e-30d3-4b29-95f1-169f70ef1027","type":"Circle"},{"attributes":{"below":[{"id":"a96224f3-8593-4e48-960f-941aa79ced28","type":"LinearAxis"}],"left":[{"id":"82e85fe4-c30e-48fd-81c2-59fc1724082a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a96224f3-8593-4e48-960f-941aa79ced28","type":"LinearAxis"},{"id":"a698ddf9-f927-458f-bf62-5ab9f8189e98","type":"Grid"},{"id":"82e85fe4-c30e-48fd-81c2-59fc1724082a","type":"LinearAxis"},{"id":"1cf8ac72-0a33-4b8c-ade7-a48c8493871d","type":"Grid"},{"id":"bf7f7e34-4108-4edf-9ab7-3909a619b67e","type":"BoxAnnotation"},{"id":"34426900-8ab5-4987-929b-f8719573985d","type":"PolyAnnotation"},{"id":"30c35e66-dc45-494b-b798-00539fd7bf12","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"a3cfdfce-b1b1-4e8f-a371-8fe08362cf98","type":"ToolEvents"},"toolbar":{"id":"e202bcf0-be8c-4992-b39f-8f166dfe9081","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f9b488a3-ecd4-4b7f-8774-2b1a53f263d1","type":"DataRange1d"},"y_range":{"id":"d7ca8faf-ec71-4af4-9e91-3786e1dfd67d","type":"DataRange1d"}},"id":"83f9af96-4ea4-4f9d-bf0e-c151223ed575","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"2dc01930-7b67-4603-802e-ab10cb1fc9a4","type":"BasicTickFormatter"},"plot":{"id":"83f9af96-4ea4-4f9d-bf0e-c151223ed575","subtype":"Figure","type":"Plot"},"ticker":{"id":"8733d682-970c-42a6-a360-6a0e56de062c","type":"BasicTicker"}},"id":"82e85fe4-c30e-48fd-81c2-59fc1724082a","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"24cf674c-3b0a-498e-a5a5-f12f84549d89","type":"BoxSelectTool"},{"id":"09942082-5112-455a-91af-9033a0e48fbf","type":"LassoSelectTool"},{"id":"e2ead073-2320-451c-bc6a-6972cdd10eb6","type":"HelpTool"}]},"id":"cf3049f5-547e-42ad-bd2d-6ce04aed4993","type":"Toolbar"},{"attributes":{},"id":"0a91e891-9784-4b31-8ccb-5a38d76c9f2e","type":"BasicTicker"},{"attributes":{},"id":"8733d682-970c-42a6-a360-6a0e56de062c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"cbfc2932-015c-4a88-a7b6-146f5c5d85d7","type":"BasicTickFormatter"},"plot":{"id":"f150cdba-ddaa-4157-a4bb-17f5cd6f1e4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f76968f4-84c2-4f70-80f6-e06f835bcd8c","type":"BasicTicker"}},"id":"78158ff4-7233-46cc-b21a-69a7d81d037f","type":"LinearAxis"},{"attributes":{"callback":null},"id":"d7ca8faf-ec71-4af4-9e91-3786e1dfd67d","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"bf7f7e34-4108-4edf-9ab7-3909a619b67e","type":"BoxAnnotation"},"plot":{"id":"83f9af96-4ea4-4f9d-bf0e-c151223ed575","subtype":"Figure","type":"Plot"},"renderers":[{"id":"30c35e66-dc45-494b-b798-00539fd7bf12","type":"GlyphRenderer"}]},"id":"a78bccde-b640-4fd5-87ea-5674781a088d","type":"BoxSelectTool"}],"root_ids":["ca3e0705-5712-4ffc-bd2a-6f3db35fc30e"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"ad79bf49-ff20-4e5a-a554-ff4ce5fa9d3b","elementid":"845d66fc-c0d5-4295-af59-f07e6f565747","modelid":"ca3e0705-5712-4ffc-bd2a-6f3db35fc30e"}];
                
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
