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
      };var element = document.getElementById("a14d0344-9372-4c27-a2ae-b40abcd7fe8f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a14d0344-9372-4c27-a2ae-b40abcd7fe8f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"df61bd71-6546-4d49-b5c7-eabdfad4e1da":{"roots":{"references":[{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"b9e5bb37-f9f0-44e8-935a-dd26876d8446","type":"DaysTicker"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"f37eb553-c8c9-407a-a44d-0151d051d53d","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6ef26e7-1413-492a-ad0e-1f21d8b7f300","type":"BasicTicker"}},"id":"0f66fcf9-e729-420d-86c9-fd9e36892f42","type":"Grid"},{"attributes":{},"id":"31308fc4-8cb1-40c8-b98a-1922cb011f10","type":"YearsTicker"},{"attributes":{"data_source":{"id":"597b16a4-5f88-42ec-9dd2-9456c092c587","type":"ColumnDataSource"},"glyph":{"id":"7a052e25-76e9-48f2-b7b1-8551fe51f24d","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0a9eb02e-6059-4133-9f97-0c0c75db129b","type":"Segment"},"selection_glyph":null,"view":{"id":"1f4c0944-3d0a-4559-a33c-4ad51e178ecd","type":"CDSView"}},"id":"84c32e12-7ef5-4d0b-9c8d-4444719c93c5","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#F2583E"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"57c13d60-3aaa-423c-bffc-f7d96be5a477","type":"VBar"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"x1":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"y0":{"__ndarray__":"9ihcj8KFV0BI4XoUrtdXQEjhehSut1hASOF6FK5XWEAAAAAAAGBYQFyPwvUoDFhAAAAAAAAAWUAAAAAAAKBZQAAAAAAAEFlAAAAAAADQWEBI4XoUridYQFyPwvUoLFhAAAAAAADgWEAAAAAAAPBYQEjhehSux1lASOF6FK5nWkBI4XoUrjdcQAAAAAAAwFxAAAAAAAAQW0Bcj8L1KNxaQFyPwvUoPFtASOF6FK4nW0AAAAAAABBbQAAAAAAAIFhAAAAAAAAAV0AAAAAAACBWQAAAAAAAAFZASOF6FK5XVkBI4XoUridWQKRwPQrXg1VAAAAAAACQVEAAAAAAAJBUQAAAAAAA4FNAAAAAAAAAU0Bcj8L1KHxUQAAAAAAAYFRASOF6FK73U0AAAAAAAABRQAAAAAAAYFFASOF6FK7HUUBcj8L1KHxRQAAAAAAAwFFAAAAAAACAUkAAAAAAAGBSQKRwPQrXs1FAAAAAAADQUUCkcD0K1/NRQEjhehSu11FAXI/C9SicUUBI4XoUrvdQQA==","dtype":"float64","shape":[50]},"y1":{"__ndarray__":"XI/C9Sg8VkBI4XoUrsdWQEjhehSud1dASOF6FK6HVkBcj8L1KPxWQAAAAAAAwFZAAAAAAADAV0AAAAAAAOBYQAAAAAAAYFhASOF6FK7HV0Bcj8L1KGxXQAAAAAAAUFdAAAAAAACgV0AAAAAAACBYQAAAAAAAIFhASOF6FK5HWUBI4XoUrqdaQKRwPQrXY1tAXI/C9Sj8WUBI4XoUrpdZQEjhehSuR1pAAAAAAACgWUBI4XoUrgdaQAAAAAAAgFZAXI/C9Sg8VUBI4XoUrndVQOF6FK5HUVVAAAAAAABAVUAAAAAAAIBVQAAAAAAA4FRAAAAAAACwU0AAAAAAAMBTQAAAAAAAUFJAAAAAAABAUkBI4XoUrvdSQEjhehSuh1NAAAAAAABgU0AAAAAAAEBQQEjhehSu51BASOF6FK7XUEBI4XoUrtdQQAAAAAAAEFFAXI/C9SjsUUAAAAAAAGBRQKRwPQrXM1FApHA9CtdTUUBI4XoUrndRQFyPwvUobFFAAAAAAADgUEAAAAAAAHBQQA==","dtype":"float64","shape":[50]}}},"id":"597b16a4-5f88-42ec-9dd2-9456c092c587","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3089bb23-6523-48b8-bf36-79919b06577a","type":"PanTool"},{"id":"f3e3da19-960d-467c-999d-51cb5999bc57","type":"WheelZoomTool"},{"id":"02d6b2e5-92a2-462b-9e19-60f8da25e389","type":"BoxZoomTool"},{"id":"da154b9b-2e5c-456d-a957-c77b6c597eee","type":"ResetTool"},{"id":"c9fbe7c5-67d8-4c58-9eb8-6291c7a2e646","type":"SaveTool"}]},"id":"8ebf2723-a35a-463e-87f7-0ab0cc99d7cd","type":"Toolbar"},{"attributes":{"months":[0,6]},"id":"b4cab7db-8674-4646-9292-6fd8c554c4eb","type":"MonthsTicker"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"SOF6FK6nVkBI4XoUrjdXQEjhehSux1dASOF6FK7XV0BI4XoUrldYQFyPwvUo7FtApHA9CtcDWkBI4XoUrtdZQEjhehSut1ZApHA9CtcjVkBI4XoUrpdVQAAAAAAAgFVApHA9CteDVUBI4XoUrvdUQEjhehSu11NAAAAAAADQU0BI4XoUrodSQFyPwvUorFNASOF6FK6nUEAAAAAAAABRQAAAAAAAcFFASOF6FK53UUCkcD0K13NRQKRwPQrX81BAXI/C9SiMUEA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"AAAAAAAAWEBI4XoUrgdYQEjhehSup1hAXI/C9Sj8V0AAAAAAALBYQEjhehSuJ1xA4XoUrkfxWkBcj8L1KIxaQFyPwvUonFdApHA9CtfjVkAAAAAAABBWQEjhehSu91VASOF6FK4nVkBI4XoUrkdVQEjhehSuh1RASOF6FK43VEBI4XoUrsdTQFyPwvUoXFRAAAAAAADQUEAAAAAAAIBRQAAAAAAAsFFApHA9CtczUkBcj8L1KLxRQFyPwvUojFFAAAAAAADwUEA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AAAAoTG3a0IAAIBs1rdrQgAAAP1XvGtCAAAAlKG9a0IAAADCNMBrQgAAAPDHwmtCAACAUrbEa0IAAAC1pMZrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAACAc7nNa0IAAAA/Xs5rQgAAgAoDz2tCAAAA1qfPa0IAAIChTNBrQgAAAJuE02tCAACAlLzWa0IAAIArBthrQgAAgMJP2WtCAACA8OLba0IAAIC1v99rQgAAAIFk4GtCAACATAnha0I=","dtype":"float64","shape":[25]}}},"id":"8c74d4ac-7417-4d20-b722-efb3cc2fe008","type":"ColumnDataSource"},{"attributes":{"source":{"id":"597b16a4-5f88-42ec-9dd2-9456c092c587","type":"ColumnDataSource"}},"id":"1f4c0944-3d0a-4559-a33c-4ad51e178ecd","type":"CDSView"},{"attributes":{},"id":"c9fbe7c5-67d8-4c58-9eb8-6291c7a2e646","type":"SaveTool"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"b7e00fbf-0051-4a77-a134-f7c2697a0632","type":"AdaptiveTicker"},{"attributes":{},"id":"e6ef26e7-1413-492a-ad0e-1f21d8b7f300","type":"BasicTicker"},{"attributes":{"months":[0,4,8]},"id":"e3709682-8e83-417b-b4ad-5ce0ff07b7ed","type":"MonthsTicker"},{"attributes":{"callback":null},"id":"e4bddeeb-f112-480e-ab56-12cb5750c443","type":"DataRange1d"},{"attributes":{"source":{"id":"3788c2f8-d2ae-4c12-9567-477cb819e5d8","type":"ColumnDataSource"}},"id":"5dc73d6e-c007-466d-a5e1-63b4b752747d","type":"CDSView"},{"attributes":{},"id":"da154b9b-2e5c-456d-a957-c77b6c597eee","type":"ResetTool"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"6c3c8b4e-9c56-400e-a28d-f465af4cd787","type":"AdaptiveTicker"},{"attributes":{"formatter":{"id":"e1adb286-a4a7-4ea6-9e26-7d909e5f54a5","type":"BasicTickFormatter"},"plot":{"id":"f37eb553-c8c9-407a-a44d-0151d051d53d","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6ef26e7-1413-492a-ad0e-1f21d8b7f300","type":"BasicTicker"}},"id":"cf479857-0316-4013-a83d-2e92ceb81a4c","type":"LinearAxis"},{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"b018364b-bfe5-43db-8444-8c0d2f7b9499","type":"Title"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"b7e00fbf-0051-4a77-a134-f7c2697a0632","type":"AdaptiveTicker"},{"id":"6c3c8b4e-9c56-400e-a28d-f465af4cd787","type":"AdaptiveTicker"},{"id":"b20cf036-6a0b-4758-9227-3c488cf462e2","type":"AdaptiveTicker"},{"id":"b9e5bb37-f9f0-44e8-935a-dd26876d8446","type":"DaysTicker"},{"id":"c2dbb333-8ead-4e6f-8fe7-72f415aaf506","type":"DaysTicker"},{"id":"a1da74fe-9b88-40c9-b28d-f3d8e8d2024d","type":"DaysTicker"},{"id":"b4431211-76f3-42bd-9e02-72284e6966ea","type":"DaysTicker"},{"id":"47cf2957-9efb-4933-b587-f0f2f427a865","type":"MonthsTicker"},{"id":"14341898-a2c0-47a1-84fd-0f35a7f26265","type":"MonthsTicker"},{"id":"e3709682-8e83-417b-b4ad-5ce0ff07b7ed","type":"MonthsTicker"},{"id":"b4cab7db-8674-4646-9292-6fd8c554c4eb","type":"MonthsTicker"},{"id":"31308fc4-8cb1-40c8-b98a-1922cb011f10","type":"YearsTicker"}]},"id":"a42af677-21bc-4535-8dbc-dec55435fba6","type":"DatetimeTicker"},{"attributes":{"data_source":{"id":"3788c2f8-d2ae-4c12-9567-477cb819e5d8","type":"ColumnDataSource"},"glyph":{"id":"69dd672f-8ddf-4dc5-8722-f266e2181525","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"372595e8-8c21-4857-a8b2-e6eb1c0b1c8f","type":"VBar"},"selection_glyph":null,"view":{"id":"5dc73d6e-c007-466d-a5e1-63b4b752747d","type":"CDSView"}},"id":"dba8bdcd-b780-4b24-888b-b0a08d51dd61","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"0a9eb02e-6059-4133-9f97-0c0c75db129b","type":"Segment"},{"attributes":{"overlay":{"id":"102c587d-df57-4fd4-89e6-93919c195e40","type":"BoxAnnotation"}},"id":"02d6b2e5-92a2-462b-9e19-60f8da25e389","type":"BoxZoomTool"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"47cf2957-9efb-4933-b587-f0f2f427a865","type":"MonthsTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"372595e8-8c21-4857-a8b2-e6eb1c0b1c8f","type":"VBar"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"14341898-a2c0-47a1-84fd-0f35a7f26265","type":"MonthsTicker"},{"attributes":{},"id":"f3e3da19-960d-467c-999d-51cb5999bc57","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"d088eca6-1178-4ae2-bb4d-bb4c8f747b94","type":"DatetimeAxis"}],"left":[{"id":"cf479857-0316-4013-a83d-2e92ceb81a4c","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"d088eca6-1178-4ae2-bb4d-bb4c8f747b94","type":"DatetimeAxis"},{"id":"1bf79a8e-68a9-4a43-a7e2-715c6cbc4c07","type":"Grid"},{"id":"cf479857-0316-4013-a83d-2e92ceb81a4c","type":"LinearAxis"},{"id":"0f66fcf9-e729-420d-86c9-fd9e36892f42","type":"Grid"},{"id":"102c587d-df57-4fd4-89e6-93919c195e40","type":"BoxAnnotation"},{"id":"84c32e12-7ef5-4d0b-9c8d-4444719c93c5","type":"GlyphRenderer"},{"id":"dba8bdcd-b780-4b24-888b-b0a08d51dd61","type":"GlyphRenderer"},{"id":"9b84e8f1-2a00-4385-a3e5-6d55470b27bd","type":"GlyphRenderer"}],"title":{"id":"b018364b-bfe5-43db-8444-8c0d2f7b9499","type":"Title"},"toolbar":{"id":"8ebf2723-a35a-463e-87f7-0ab0cc99d7cd","type":"Toolbar"},"x_range":{"id":"e4bddeeb-f112-480e-ab56-12cb5750c443","type":"DataRange1d"},"x_scale":{"id":"46e3b127-56a8-4055-a975-385c3637b55a","type":"LinearScale"},"y_range":{"id":"1b98ed4a-dbdf-41ae-852c-d322e32009a3","type":"DataRange1d"},"y_scale":{"id":"95273064-91d0-4afa-9d0f-bc5ac52bc042","type":"LinearScale"}},"id":"f37eb553-c8c9-407a-a44d-0151d051d53d","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#D5E1DD"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"69dd672f-8ddf-4dc5-8722-f266e2181525","type":"VBar"},{"attributes":{"formatter":{"id":"c4c14362-b9fc-4e4a-a76b-1923be9ef86d","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"f37eb553-c8c9-407a-a44d-0151d051d53d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a42af677-21bc-4535-8dbc-dec55435fba6","type":"DatetimeTicker"}},"id":"d088eca6-1178-4ae2-bb4d-bb4c8f747b94","type":"DatetimeAxis"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"f37eb553-c8c9-407a-a44d-0151d051d53d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a42af677-21bc-4535-8dbc-dec55435fba6","type":"DatetimeTicker"}},"id":"1bf79a8e-68a9-4a43-a7e2-715c6cbc4c07","type":"Grid"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"7a052e25-76e9-48f2-b7b1-8551fe51f24d","type":"Segment"},{"attributes":{},"id":"3089bb23-6523-48b8-bf36-79919b06577a","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"102c587d-df57-4fd4-89e6-93919c195e40","type":"BoxAnnotation"},{"attributes":{"days":[1,15]},"id":"b4431211-76f3-42bd-9e02-72284e6966ea","type":"DaysTicker"},{"attributes":{"days":[1,8,15,22]},"id":"a1da74fe-9b88-40c9-b28d-f3d8e8d2024d","type":"DaysTicker"},{"attributes":{},"id":"95273064-91d0-4afa-9d0f-bc5ac52bc042","type":"LinearScale"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"c2dbb333-8ead-4e6f-8fe7-72f415aaf506","type":"DaysTicker"},{"attributes":{"callback":null},"id":"1b98ed4a-dbdf-41ae-852c-d322e32009a3","type":"DataRange1d"},{"attributes":{},"id":"c4c14362-b9fc-4e4a-a76b-1923be9ef86d","type":"DatetimeTickFormatter"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"pHA9CtezVkBI4XoUrldXQEjhehSuB1hApHA9CtfjV0AAAAAAAABZQAAAAAAAQFlAAAAAAACAWEBI4XoUrtdXQEjhehSu11hAAAAAAACwWUAAAAAAANBZQEjhehSu91tApHA9CtcTWkBcj8L1KMxaQAAAAAAAkFpApHA9CtdDVkBI4XoUrvdSQKRwPQrXI1RAXI/C9Si8U0BI4XoUrldRQKRwPQrXc1FAXI/C9ShcUkCkcD0K16NRQFyPwvUonFFASOF6FK7HUUA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"SOF6FK5nVkCkcD0K1/NWQAAAAAAAsFdApHA9CtdzV0CkcD0K19NXQKRwPQrX41hASOF6FK5nWECkcD0K16NXQAAAAAAA0FdAAAAAAAAwWECkcD0K17NZQKRwPQrXs1pASOF6FK7nWUBcj8L1KExaQAAAAAAAgFpAAAAAAADAVUAAAAAAAJBSQAAAAAAAIFNASOF6FK6nU0AAAAAAADBRQFyPwvUo3FBASOF6FK43UkBI4XoUrpdRQKRwPQrXk1FAAAAAAACQUUA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAOHu4a0IAAIADILlrQgAAAM/EuWtCAACAMbO7a0IAAIDI/LxrQgAAgF9GvmtCAACAjdnAa0IAAABZfsFrQgAAgCQjwmtCAAAAHlvFa0IAAIDp/8VrQgAAgIBJx2tCAAAAEcvLa0IAAAAEO9JrQgAAgM/f0mtCAACAZinUa0IAAABgYddrQgAAAPeq2GtCAAAAJT7ba0IAAAC8h9xrQgAAgIcs3WtCAAAAU9Hda0I=","dtype":"float64","shape":[25]}}},"id":"3788c2f8-d2ae-4c12-9567-477cb819e5d8","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8c74d4ac-7417-4d20-b722-efb3cc2fe008","type":"ColumnDataSource"}},"id":"f8bfaf37-95d8-4338-b058-40a357ff89f9","type":"CDSView"},{"attributes":{},"id":"e1adb286-a4a7-4ea6-9e26-7d909e5f54a5","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8c74d4ac-7417-4d20-b722-efb3cc2fe008","type":"ColumnDataSource"},"glyph":{"id":"57c13d60-3aaa-423c-bffc-f7d96be5a477","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8070c4a7-f9dd-45b8-9ee4-4de0ee43c52a","type":"VBar"},"selection_glyph":null,"view":{"id":"f8bfaf37-95d8-4338-b058-40a357ff89f9","type":"CDSView"}},"id":"9b84e8f1-2a00-4385-a3e5-6d55470b27bd","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"8070c4a7-f9dd-45b8-9ee4-4de0ee43c52a","type":"VBar"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"b20cf036-6a0b-4758-9227-3c488cf462e2","type":"AdaptiveTicker"},{"attributes":{},"id":"46e3b127-56a8-4055-a975-385c3637b55a","type":"LinearScale"}],"root_ids":["f37eb553-c8c9-407a-a44d-0151d051d53d"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"df61bd71-6546-4d49-b5c7-eabdfad4e1da","elementid":"a14d0344-9372-4c27-a2ae-b40abcd7fe8f","modelid":"f37eb553-c8c9-407a-a44d-0151d051d53d"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
