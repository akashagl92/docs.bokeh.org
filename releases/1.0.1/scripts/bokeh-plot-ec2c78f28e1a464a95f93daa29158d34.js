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
      };var element = document.getElementById("1e51070d-8908-48cc-8405-0aad78041460");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1e51070d-8908-48cc-8405-0aad78041460' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"fdc2eccf-6747-4e58-8de9-1baaf6d22a94":{"roots":{"references":[{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"20909","subtype":"Figure","type":"Plot"},"ticker":{"id":"20925","type":"BasicTicker"}},"id":"20928","type":"Grid"},{"attributes":{"months":[0,6]},"id":"20973","type":"MonthsTicker"},{"attributes":{"source":{"id":"20947","type":"ColumnDataSource"}},"id":"20951","type":"CDSView"},{"attributes":{},"id":"20915","type":"LinearScale"},{"attributes":{"months":[0,4,8]},"id":"20972","type":"MonthsTicker"},{"attributes":{},"id":"20925","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"20944","type":"Segment"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"20971","type":"MonthsTicker"},{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"20908","type":"Title"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"20943","type":"Segment"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"20970","type":"MonthsTicker"},{"attributes":{"source":{"id":"20942","type":"ColumnDataSource"}},"id":"20946","type":"CDSView"},{"attributes":{"formatter":{"id":"20961","type":"BasicTickFormatter"},"plot":{"id":"20909","subtype":"Figure","type":"Plot"},"ticker":{"id":"20925","type":"BasicTicker"}},"id":"20924","type":"LinearAxis"},{"attributes":{"data_source":{"id":"20947","type":"ColumnDataSource"},"glyph":{"id":"20948","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20949","type":"VBar"},"selection_glyph":null,"view":{"id":"20951","type":"CDSView"}},"id":"20950","type":"GlyphRenderer"},{"attributes":{"days":[1,15]},"id":"20969","type":"DaysTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20936","type":"BoxAnnotation"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"20909","subtype":"Figure","type":"Plot"},"ticker":{"id":"20920","type":"DatetimeTicker"}},"id":"20923","type":"Grid"},{"attributes":{"source":{"id":"20952","type":"ColumnDataSource"}},"id":"20956","type":"CDSView"},{"attributes":{"below":[{"id":"20919","type":"DatetimeAxis"}],"left":[{"id":"20924","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"20919","type":"DatetimeAxis"},{"id":"20923","type":"Grid"},{"id":"20924","type":"LinearAxis"},{"id":"20928","type":"Grid"},{"id":"20936","type":"BoxAnnotation"},{"id":"20945","type":"GlyphRenderer"},{"id":"20950","type":"GlyphRenderer"},{"id":"20955","type":"GlyphRenderer"}],"title":{"id":"20908","type":"Title"},"toolbar":{"id":"20934","type":"Toolbar"},"x_range":{"id":"20911","type":"DataRange1d"},"x_scale":{"id":"20915","type":"LinearScale"},"y_range":{"id":"20913","type":"DataRange1d"},"y_scale":{"id":"20917","type":"LinearScale"}},"id":"20909","subtype":"Figure","type":"Plot"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"20963","type":"AdaptiveTicker"},{"id":"20964","type":"AdaptiveTicker"},{"id":"20965","type":"AdaptiveTicker"},{"id":"20966","type":"DaysTicker"},{"id":"20967","type":"DaysTicker"},{"id":"20968","type":"DaysTicker"},{"id":"20969","type":"DaysTicker"},{"id":"20970","type":"MonthsTicker"},{"id":"20971","type":"MonthsTicker"},{"id":"20972","type":"MonthsTicker"},{"id":"20973","type":"MonthsTicker"},{"id":"20974","type":"YearsTicker"}]},"id":"20920","type":"DatetimeTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"20954","type":"VBar"},{"attributes":{"data_source":{"id":"20952","type":"ColumnDataSource"},"glyph":{"id":"20953","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20954","type":"VBar"},"selection_glyph":null,"view":{"id":"20956","type":"CDSView"}},"id":"20955","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"20949","type":"VBar"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#F2583E"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"20953","type":"VBar"},{"attributes":{"data_source":{"id":"20942","type":"ColumnDataSource"},"glyph":{"id":"20943","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20944","type":"Segment"},"selection_glyph":null,"view":{"id":"20946","type":"CDSView"}},"id":"20945","type":"GlyphRenderer"},{"attributes":{"days":[1,8,15,22]},"id":"20968","type":"DaysTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"20967","type":"DaysTicker"},{"attributes":{},"id":"20933","type":"SaveTool"},{"attributes":{},"id":"20980","type":"UnionRenderers"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"20966","type":"DaysTicker"},{"attributes":{"callback":null},"id":"20913","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"SOF6FK6nVkBI4XoUrjdXQEjhehSux1dASOF6FK7XV0BI4XoUrldYQFyPwvUo7FtApHA9CtcDWkBI4XoUrtdZQEjhehSut1ZApHA9CtcjVkBI4XoUrpdVQAAAAAAAgFVApHA9CteDVUBI4XoUrvdUQEjhehSu11NAAAAAAADQU0BI4XoUrodSQFyPwvUorFNASOF6FK6nUEAAAAAAAABRQAAAAAAAcFFASOF6FK53UUCkcD0K13NRQKRwPQrX81BAXI/C9SiMUEA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"AAAAAAAAWEBI4XoUrgdYQEjhehSup1hAXI/C9Sj8V0AAAAAAALBYQEjhehSuJ1xA4XoUrkfxWkBcj8L1KIxaQFyPwvUonFdApHA9CtfjVkAAAAAAABBWQEjhehSu91VASOF6FK4nVkBI4XoUrkdVQEjhehSuh1RASOF6FK43VEBI4XoUrsdTQFyPwvUoXFRAAAAAAADQUEAAAAAAAIBRQAAAAAAAsFFApHA9CtczUkBcj8L1KLxRQFyPwvUojFFAAAAAAADwUEA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AAAAoTG3a0IAAIBs1rdrQgAAAP1XvGtCAAAAlKG9a0IAAADCNMBrQgAAAPDHwmtCAACAUrbEa0IAAAC1pMZrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAACAc7nNa0IAAAA/Xs5rQgAAgAoDz2tCAAAA1qfPa0IAAIChTNBrQgAAAJuE02tCAACAlLzWa0IAAIArBthrQgAAgMJP2WtCAACA8OLba0IAAIC1v99rQgAAAIFk4GtCAACATAnha0I=","dtype":"float64","shape":[25]}},"selected":{"id":"20979","type":"Selection"},"selection_policy":{"id":"20980","type":"UnionRenderers"}},"id":"20952","type":"ColumnDataSource"},{"attributes":{},"id":"20932","type":"ResetTool"},{"attributes":{},"id":"20979","type":"Selection"},{"attributes":{"callback":null},"id":"20911","type":"DataRange1d"},{"attributes":{"overlay":{"id":"20936","type":"BoxAnnotation"}},"id":"20931","type":"BoxZoomTool"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"20965","type":"AdaptiveTicker"},{"attributes":{},"id":"20978","type":"UnionRenderers"},{"attributes":{},"id":"20959","type":"DatetimeTickFormatter"},{"attributes":{"formatter":{"id":"20959","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"20909","subtype":"Figure","type":"Plot"},"ticker":{"id":"20920","type":"DatetimeTicker"}},"id":"20919","type":"DatetimeAxis"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"20964","type":"AdaptiveTicker"},{"attributes":{},"id":"20977","type":"Selection"},{"attributes":{},"id":"20930","type":"WheelZoomTool"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"20963","type":"AdaptiveTicker"},{"attributes":{},"id":"20976","type":"UnionRenderers"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#D5E1DD"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"20948","type":"VBar"},{"attributes":{},"id":"20929","type":"PanTool"},{"attributes":{},"id":"20975","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20929","type":"PanTool"},{"id":"20930","type":"WheelZoomTool"},{"id":"20931","type":"BoxZoomTool"},{"id":"20932","type":"ResetTool"},{"id":"20933","type":"SaveTool"}]},"id":"20934","type":"Toolbar"},{"attributes":{},"id":"20917","type":"LinearScale"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"pHA9CtezVkBI4XoUrldXQEjhehSuB1hApHA9CtfjV0AAAAAAAABZQAAAAAAAQFlAAAAAAACAWEBI4XoUrtdXQEjhehSu11hAAAAAAACwWUAAAAAAANBZQEjhehSu91tApHA9CtcTWkBcj8L1KMxaQAAAAAAAkFpApHA9CtdDVkBI4XoUrvdSQKRwPQrXI1RAXI/C9Si8U0BI4XoUrldRQKRwPQrXc1FAXI/C9ShcUkCkcD0K16NRQFyPwvUonFFASOF6FK7HUUA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"SOF6FK5nVkCkcD0K1/NWQAAAAAAAsFdApHA9CtdzV0CkcD0K19NXQKRwPQrX41hASOF6FK5nWECkcD0K16NXQAAAAAAA0FdAAAAAAAAwWECkcD0K17NZQKRwPQrXs1pASOF6FK7nWUBcj8L1KExaQAAAAAAAgFpAAAAAAADAVUAAAAAAAJBSQAAAAAAAIFNASOF6FK6nU0AAAAAAADBRQFyPwvUo3FBASOF6FK43UkBI4XoUrpdRQKRwPQrXk1FAAAAAAACQUUA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAOHu4a0IAAIADILlrQgAAAM/EuWtCAACAMbO7a0IAAIDI/LxrQgAAgF9GvmtCAACAjdnAa0IAAABZfsFrQgAAgCQjwmtCAAAAHlvFa0IAAIDp/8VrQgAAgIBJx2tCAAAAEcvLa0IAAAAEO9JrQgAAgM/f0mtCAACAZinUa0IAAABgYddrQgAAAPeq2GtCAAAAJT7ba0IAAAC8h9xrQgAAgIcs3WtCAAAAU9Hda0I=","dtype":"float64","shape":[25]}},"selected":{"id":"20977","type":"Selection"},"selection_policy":{"id":"20978","type":"UnionRenderers"}},"id":"20947","type":"ColumnDataSource"},{"attributes":{},"id":"20961","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x0":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"x1":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"y0":{"__ndarray__":"9ihcj8KFV0BI4XoUrtdXQEjhehSut1hASOF6FK5XWEAAAAAAAGBYQFyPwvUoDFhAAAAAAAAAWUAAAAAAAKBZQAAAAAAAEFlAAAAAAADQWEBI4XoUridYQFyPwvUoLFhAAAAAAADgWEAAAAAAAPBYQEjhehSux1lASOF6FK5nWkBI4XoUrjdcQAAAAAAAwFxAAAAAAAAQW0Bcj8L1KNxaQFyPwvUoPFtASOF6FK4nW0AAAAAAABBbQAAAAAAAIFhAAAAAAAAAV0AAAAAAACBWQAAAAAAAAFZASOF6FK5XVkBI4XoUridWQKRwPQrXg1VAAAAAAACQVEAAAAAAAJBUQAAAAAAA4FNAAAAAAAAAU0Bcj8L1KHxUQAAAAAAAYFRASOF6FK73U0AAAAAAAABRQAAAAAAAYFFASOF6FK7HUUBcj8L1KHxRQAAAAAAAwFFAAAAAAACAUkAAAAAAAGBSQKRwPQrXs1FAAAAAAADQUUCkcD0K1/NRQEjhehSu11FAXI/C9SicUUBI4XoUrvdQQA==","dtype":"float64","shape":[50]},"y1":{"__ndarray__":"XI/C9Sg8VkBI4XoUrsdWQEjhehSud1dASOF6FK6HVkBcj8L1KPxWQAAAAAAAwFZAAAAAAADAV0AAAAAAAOBYQAAAAAAAYFhASOF6FK7HV0Bcj8L1KGxXQAAAAAAAUFdAAAAAAACgV0AAAAAAACBYQAAAAAAAIFhASOF6FK5HWUBI4XoUrqdaQKRwPQrXY1tAXI/C9Sj8WUBI4XoUrpdZQEjhehSuR1pAAAAAAACgWUBI4XoUrgdaQAAAAAAAgFZAXI/C9Sg8VUBI4XoUrndVQOF6FK5HUVVAAAAAAABAVUAAAAAAAIBVQAAAAAAA4FRAAAAAAACwU0AAAAAAAMBTQAAAAAAAUFJAAAAAAABAUkBI4XoUrvdSQEjhehSuh1NAAAAAAABgU0AAAAAAAEBQQEjhehSu51BASOF6FK7XUEBI4XoUrtdQQAAAAAAAEFFAXI/C9SjsUUAAAAAAAGBRQKRwPQrXM1FApHA9CtdTUUBI4XoUrndRQFyPwvUobFFAAAAAAADgUEAAAAAAAHBQQA==","dtype":"float64","shape":[50]}},"selected":{"id":"20975","type":"Selection"},"selection_policy":{"id":"20976","type":"UnionRenderers"}},"id":"20942","type":"ColumnDataSource"},{"attributes":{},"id":"20974","type":"YearsTicker"}],"root_ids":["20909"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"fdc2eccf-6747-4e58-8de9-1baaf6d22a94","roots":{"20909":"1e51070d-8908-48cc-8405-0aad78041460"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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