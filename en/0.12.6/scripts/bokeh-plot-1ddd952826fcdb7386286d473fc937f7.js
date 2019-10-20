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
      };var element = document.getElementById("22b0a1c5-66f5-42e9-a81c-1011abc44c45");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '22b0a1c5-66f5-42e9-a81c-1011abc44c45' but no matching script tag was found. ")
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
                var docs_json = {"7d3169ed-5501-45eb-a2fd-36450cdb509f":{"roots":{"references":[{"attributes":{"formatter":{"id":"29ca6bff-6206-4490-93c0-fea11dbd19cb","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d3ab3dac-c198-4e50-8fe6-66d20f8d4e56","subtype":"Figure","type":"Plot"},"ticker":{"id":"3aba42b6-c7ed-4ba7-82b4-2a7c3601095a","type":"DatetimeTicker"}},"id":"047b687f-327c-475a-a911-0563ddf9fc76","type":"DatetimeAxis"},{"attributes":{},"id":"7369f64b-9201-4a35-a497-0f712f0c2277","type":"BasicTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"ba356caf-b9ee-48c5-9da3-4b7b59fa8149","type":"DaysTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"22b87dc9-155f-4a7b-a4f7-29e7619dd656","type":"VBar"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"3b59e8a5-833f-4f1c-bf4a-9e64463e5573","type":"Segment"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"6786162d-c6dc-4cc9-a8b0-693b1c8e38d0","type":"MonthsTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#F2583E"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"5e3d87f0-ecc5-4cbd-9bd6-f52f25c5cfc7","type":"VBar"},{"attributes":{"callback":null,"column_names":["top","bottom","x"],"data":{"bottom":{"__ndarray__":"SOF6FK6nVkBI4XoUrjdXQEjhehSux1dASOF6FK7XV0BI4XoUrldYQFyPwvUo7FtApHA9CtcDWkBI4XoUrtdZQEjhehSut1ZApHA9CtcjVkBI4XoUrpdVQAAAAAAAgFVApHA9CteDVUBI4XoUrvdUQEjhehSu11NAAAAAAADQU0BI4XoUrodSQFyPwvUorFNASOF6FK6nUEAAAAAAAABRQAAAAAAAcFFASOF6FK53UUCkcD0K13NRQKRwPQrX81BAXI/C9SiMUEA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"AAAAAAAAWEBI4XoUrgdYQEjhehSup1hAXI/C9Sj8V0AAAAAAALBYQEjhehSuJ1xA4XoUrkfxWkBcj8L1KIxaQFyPwvUonFdApHA9CtfjVkAAAAAAABBWQEjhehSu91VASOF6FK4nVkBI4XoUrkdVQEjhehSuh1RASOF6FK43VEBI4XoUrsdTQFyPwvUoXFRAAAAAAADQUEAAAAAAAIBRQAAAAAAAsFFApHA9CtczUkBcj8L1KLxRQFyPwvUojFFAAAAAAADwUEA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AAAAoTG3a0IAAIBs1rdrQgAAAP1XvGtCAAAAlKG9a0IAAADCNMBrQgAAAPDHwmtCAACAUrbEa0IAAAC1pMZrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAACAc7nNa0IAAAA/Xs5rQgAAgAoDz2tCAAAA1qfPa0IAAIChTNBrQgAAAJuE02tCAACAlLzWa0IAAIArBthrQgAAgMJP2WtCAACA8OLba0IAAIC1v99rQgAAAIFk4GtCAACATAnha0I=","dtype":"float64","shape":[25]}}},"id":"db537333-4b17-4136-854f-75a5dfba166d","type":"ColumnDataSource"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"6d3d15e2-f09c-40e8-8580-9e64ca4f521f","type":"AdaptiveTicker"},{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"16c068b2-9f57-402f-ba29-1bff5f701a21","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"3d4bb77d-fb14-4967-bbb0-a6cbecaed113","type":"Segment"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9efc1b4e-f67d-4c17-b625-3a84ef2fc406","type":"PanTool"},{"id":"7280f6d3-6a97-4a5c-af67-28f5a03495f9","type":"WheelZoomTool"},{"id":"32041700-f96e-4b89-a1f8-5a9516de362f","type":"BoxZoomTool"},{"id":"719ba25d-7166-42ea-93e9-1a4803b5355d","type":"ResetTool"},{"id":"08141076-0721-4a5c-9963-8b081eba10fe","type":"SaveTool"}]},"id":"9fa6dfb0-3454-44c5-aa9d-c2cc7928480b","type":"Toolbar"},{"attributes":{"plot":{"id":"d3ab3dac-c198-4e50-8fe6-66d20f8d4e56","subtype":"Figure","type":"Plot"}},"id":"9efc1b4e-f67d-4c17-b625-3a84ef2fc406","type":"PanTool"},{"attributes":{"overlay":{"id":"609a03fe-d45c-4d43-9aa6-b093c5d299db","type":"BoxAnnotation"},"plot":{"id":"d3ab3dac-c198-4e50-8fe6-66d20f8d4e56","subtype":"Figure","type":"Plot"}},"id":"32041700-f96e-4b89-a1f8-5a9516de362f","type":"BoxZoomTool"},{"attributes":{},"id":"2816a1a4-994b-41b3-989b-1c604f0acd38","type":"BasicTickFormatter"},{"attributes":{"months":[0,6]},"id":"4a8048b8-5f81-49dc-b656-0af206afd720","type":"MonthsTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#D5E1DD"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"d0b29a8d-6648-43d9-9bc2-467030584020","type":"VBar"},{"attributes":{},"id":"e4a53077-9868-48ea-8d95-3ce94a842eea","type":"LinearScale"},{"attributes":{"below":[{"id":"047b687f-327c-475a-a911-0563ddf9fc76","type":"DatetimeAxis"}],"left":[{"id":"9db366f0-a2dd-4204-ab65-3b62516a71bf","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"047b687f-327c-475a-a911-0563ddf9fc76","type":"DatetimeAxis"},{"id":"9ab4add9-5e3f-4a66-99b0-cd25f0acf1e4","type":"Grid"},{"id":"9db366f0-a2dd-4204-ab65-3b62516a71bf","type":"LinearAxis"},{"id":"0b74c5fb-9148-4cef-8c6b-0e488e74de64","type":"Grid"},{"id":"609a03fe-d45c-4d43-9aa6-b093c5d299db","type":"BoxAnnotation"},{"id":"5c9ac368-e8c1-488e-a402-7c6573791ea8","type":"GlyphRenderer"},{"id":"4ebdaa94-2e28-4a64-9c26-69b60c9afbbe","type":"GlyphRenderer"},{"id":"a7ddd6a1-0699-462d-ac59-490466c6d769","type":"GlyphRenderer"}],"title":{"id":"16c068b2-9f57-402f-ba29-1bff5f701a21","type":"Title"},"tool_events":{"id":"eee1b994-a9d9-42a8-bb9d-4d509d753b41","type":"ToolEvents"},"toolbar":{"id":"9fa6dfb0-3454-44c5-aa9d-c2cc7928480b","type":"Toolbar"},"x_range":{"id":"45a69019-4ae1-4ae4-94e4-b807e7c90da4","type":"DataRange1d"},"x_scale":{"id":"aa87a254-8c01-484e-ace7-7d858c96265b","type":"LinearScale"},"y_range":{"id":"67c8e695-864e-4541-9e78-d266001a7fa7","type":"DataRange1d"},"y_scale":{"id":"e4a53077-9868-48ea-8d95-3ce94a842eea","type":"LinearScale"}},"id":"d3ab3dac-c198-4e50-8fe6-66d20f8d4e56","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"d3ab3dac-c198-4e50-8fe6-66d20f8d4e56","subtype":"Figure","type":"Plot"}},"id":"719ba25d-7166-42ea-93e9-1a4803b5355d","type":"ResetTool"},{"attributes":{"data_source":{"id":"defeef7d-ef4e-4d4d-a2eb-6a234589b207","type":"ColumnDataSource"},"glyph":{"id":"3b59e8a5-833f-4f1c-bf4a-9e64463e5573","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3d4bb77d-fb14-4967-bbb0-a6cbecaed113","type":"Segment"},"selection_glyph":null},"id":"5c9ac368-e8c1-488e-a402-7c6573791ea8","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0","x1","y0","y1"],"data":{"x0":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"x1":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"y0":{"__ndarray__":"9ihcj8KFV0BI4XoUrtdXQEjhehSut1hASOF6FK5XWEAAAAAAAGBYQFyPwvUoDFhAAAAAAAAAWUAAAAAAAKBZQAAAAAAAEFlAAAAAAADQWEBI4XoUridYQFyPwvUoLFhAAAAAAADgWEAAAAAAAPBYQEjhehSux1lASOF6FK5nWkBI4XoUrjdcQAAAAAAAwFxAAAAAAAAQW0Bcj8L1KNxaQFyPwvUoPFtASOF6FK4nW0AAAAAAABBbQAAAAAAAIFhAAAAAAAAAV0AAAAAAACBWQAAAAAAAAFZASOF6FK5XVkBI4XoUridWQKRwPQrXg1VAAAAAAACQVEAAAAAAAJBUQAAAAAAA4FNAAAAAAAAAU0Bcj8L1KHxUQAAAAAAAYFRASOF6FK73U0AAAAAAAABRQAAAAAAAYFFASOF6FK7HUUBcj8L1KHxRQAAAAAAAwFFAAAAAAACAUkAAAAAAAGBSQKRwPQrXs1FAAAAAAADQUUCkcD0K1/NRQEjhehSu11FAXI/C9SicUUBI4XoUrvdQQA==","dtype":"float64","shape":[50]},"y1":{"__ndarray__":"XI/C9Sg8VkBI4XoUrsdWQEjhehSud1dASOF6FK6HVkBcj8L1KPxWQAAAAAAAwFZAAAAAAADAV0AAAAAAAOBYQAAAAAAAYFhASOF6FK7HV0Bcj8L1KGxXQAAAAAAAUFdAAAAAAACgV0AAAAAAACBYQAAAAAAAIFhASOF6FK5HWUBI4XoUrqdaQKRwPQrXY1tAXI/C9Sj8WUBI4XoUrpdZQEjhehSuR1pAAAAAAACgWUBI4XoUrgdaQAAAAAAAgFZAXI/C9Sg8VUBI4XoUrndVQOF6FK5HUVVAAAAAAABAVUAAAAAAAIBVQAAAAAAA4FRAAAAAAACwU0AAAAAAAMBTQAAAAAAAUFJAAAAAAABAUkBI4XoUrvdSQEjhehSuh1NAAAAAAABgU0AAAAAAAEBQQEjhehSu51BASOF6FK7XUEBI4XoUrtdQQAAAAAAAEFFAXI/C9SjsUUAAAAAAAGBRQKRwPQrXM1FApHA9CtdTUUBI4XoUrndRQFyPwvUobFFAAAAAAADgUEAAAAAAAHBQQA==","dtype":"float64","shape":[50]}}},"id":"defeef7d-ef4e-4d4d-a2eb-6a234589b207","type":"ColumnDataSource"},{"attributes":{"days":[1,8,15,22]},"id":"c9767862-5f6f-4aa2-b3e1-5f8b3c0aaf51","type":"DaysTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"609a03fe-d45c-4d43-9aa6-b093c5d299db","type":"BoxAnnotation"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"4ae8578a-06af-47df-b3d7-302a01487cb0","type":"DaysTicker"},{"attributes":{},"id":"aa87a254-8c01-484e-ace7-7d858c96265b","type":"LinearScale"},{"attributes":{"callback":null},"id":"67c8e695-864e-4541-9e78-d266001a7fa7","type":"DataRange1d"},{"attributes":{"plot":{"id":"d3ab3dac-c198-4e50-8fe6-66d20f8d4e56","subtype":"Figure","type":"Plot"}},"id":"08141076-0721-4a5c-9963-8b081eba10fe","type":"SaveTool"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"b23bda4f-62c7-4776-beaa-0ef388214402","type":"AdaptiveTicker"},{"attributes":{"formatter":{"id":"2816a1a4-994b-41b3-989b-1c604f0acd38","type":"BasicTickFormatter"},"plot":{"id":"d3ab3dac-c198-4e50-8fe6-66d20f8d4e56","subtype":"Figure","type":"Plot"},"ticker":{"id":"7369f64b-9201-4a35-a497-0f712f0c2277","type":"BasicTicker"}},"id":"9db366f0-a2dd-4204-ab65-3b62516a71bf","type":"LinearAxis"},{"attributes":{"months":[0,4,8]},"id":"d19c39ca-ad72-42fc-a9fb-d0decda65203","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"26474790-05fe-4c80-8ce9-b3e106dcf424","type":"ColumnDataSource"},"glyph":{"id":"d0b29a8d-6648-43d9-9bc2-467030584020","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22b87dc9-155f-4a7b-a4f7-29e7619dd656","type":"VBar"},"selection_glyph":null},"id":"4ebdaa94-2e28-4a64-9c26-69b60c9afbbe","type":"GlyphRenderer"},{"attributes":{},"id":"8336d70c-70be-4987-ae1a-fb9382257e82","type":"YearsTicker"},{"attributes":{"num_minor_ticks":5},"id":"3aba42b6-c7ed-4ba7-82b4-2a7c3601095a","type":"DatetimeTicker"},{"attributes":{},"id":"eee1b994-a9d9-42a8-bb9d-4d509d753b41","type":"ToolEvents"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"fbc8b17c-4433-4047-b766-5a5870049807","type":"VBar"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"d3ab3dac-c198-4e50-8fe6-66d20f8d4e56","subtype":"Figure","type":"Plot"},"ticker":{"id":"3aba42b6-c7ed-4ba7-82b4-2a7c3601095a","type":"DatetimeTicker"}},"id":"9ab4add9-5e3f-4a66-99b0-cd25f0acf1e4","type":"Grid"},{"attributes":{"plot":{"id":"d3ab3dac-c198-4e50-8fe6-66d20f8d4e56","subtype":"Figure","type":"Plot"}},"id":"7280f6d3-6a97-4a5c-af67-28f5a03495f9","type":"WheelZoomTool"},{"attributes":{"days":[1,15]},"id":"6ed7ecda-d81d-4a1b-bc76-5b458a40604e","type":"DaysTicker"},{"attributes":{},"id":"29ca6bff-6206-4490-93c0-fea11dbd19cb","type":"DatetimeTickFormatter"},{"attributes":{"callback":null},"id":"45a69019-4ae1-4ae4-94e4-b807e7c90da4","type":"DataRange1d"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"6bb3b2fb-a4c2-44d6-a608-c78103bbe0bd","type":"AdaptiveTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"67b9c123-7045-4f49-84ea-804ea0979b3c","type":"MonthsTicker"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"d3ab3dac-c198-4e50-8fe6-66d20f8d4e56","subtype":"Figure","type":"Plot"},"ticker":{"id":"7369f64b-9201-4a35-a497-0f712f0c2277","type":"BasicTicker"}},"id":"0b74c5fb-9148-4cef-8c6b-0e488e74de64","type":"Grid"},{"attributes":{"callback":null,"column_names":["top","bottom","x"],"data":{"bottom":{"__ndarray__":"pHA9CtezVkBI4XoUrldXQEjhehSuB1hApHA9CtfjV0AAAAAAAABZQAAAAAAAQFlAAAAAAACAWEBI4XoUrtdXQEjhehSu11hAAAAAAACwWUAAAAAAANBZQEjhehSu91tApHA9CtcTWkBcj8L1KMxaQAAAAAAAkFpApHA9CtdDVkBI4XoUrvdSQKRwPQrXI1RAXI/C9Si8U0BI4XoUrldRQKRwPQrXc1FAXI/C9ShcUkCkcD0K16NRQFyPwvUonFFASOF6FK7HUUA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"SOF6FK5nVkCkcD0K1/NWQAAAAAAAsFdApHA9CtdzV0CkcD0K19NXQKRwPQrX41hASOF6FK5nWECkcD0K16NXQAAAAAAA0FdAAAAAAAAwWECkcD0K17NZQKRwPQrXs1pASOF6FK7nWUBcj8L1KExaQAAAAAAAgFpAAAAAAADAVUAAAAAAAJBSQAAAAAAAIFNASOF6FK6nU0AAAAAAADBRQFyPwvUo3FBASOF6FK43UkBI4XoUrpdRQKRwPQrXk1FAAAAAAACQUUA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAOHu4a0IAAIADILlrQgAAAM/EuWtCAACAMbO7a0IAAIDI/LxrQgAAgF9GvmtCAACAjdnAa0IAAABZfsFrQgAAgCQjwmtCAAAAHlvFa0IAAIDp/8VrQgAAgIBJx2tCAAAAEcvLa0IAAAAEO9JrQgAAgM/f0mtCAACAZinUa0IAAABgYddrQgAAAPeq2GtCAAAAJT7ba0IAAAC8h9xrQgAAgIcs3WtCAAAAU9Hda0I=","dtype":"float64","shape":[25]}}},"id":"26474790-05fe-4c80-8ce9-b3e106dcf424","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"db537333-4b17-4136-854f-75a5dfba166d","type":"ColumnDataSource"},"glyph":{"id":"5e3d87f0-ecc5-4cbd-9bd6-f52f25c5cfc7","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fbc8b17c-4433-4047-b766-5a5870049807","type":"VBar"},"selection_glyph":null},"id":"a7ddd6a1-0699-462d-ac59-490466c6d769","type":"GlyphRenderer"}],"root_ids":["d3ab3dac-c198-4e50-8fe6-66d20f8d4e56"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"7d3169ed-5501-45eb-a2fd-36450cdb509f","elementid":"22b0a1c5-66f5-42e9-a81c-1011abc44c45","modelid":"d3ab3dac-c198-4e50-8fe6-66d20f8d4e56"}];
                
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
